import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import express from "npm:express";

const router = new Router()
const app = new Application()
app.use(router.routes())

const HTML: string = `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
    <meta charset='UTF-8'>
    </head>
    <body>
        <h1 style='text-align: center' >Entrega trabajo con DENO</h1>
        <form action='http://localhost:8080' method='post' style='text-align: center'>
            <label> Agregue un color  a la lista </label>
            <input type='text' name='color' id='colorID' value=''/>
            <input type='submit' value='Enviar'>
        </form>
        <div>
            <ul>`

let dataColores: string = ''
let concatHTML: string = `</ul></div></body></html>`
let colores: string[] = []

const AgregarColores = (color) => {
    return dataColores = dataColores.concat(`<li style='color: ${color}'>${color}</li>`)
}

router.get('/', (ctx) => {
        const agregarHTML = HTML.concat(dataColores, concatHTML)
        ctx.response.body = agregarHTML
})

router.post('/', async (ctx) => {
        const color = await ctx.request.body({type: 'form'}).value
        const fixedColor = color.get('color')
        colores.push(fixedColor)
        AgregarColores(fixedColor)
        const agregarHTML = HTML.concat(dataColores, concatHTML)
        ctx.response.body = agregarHTML
})


const PORT: number = 8080

await app.listen({port: PORT}, () => {
    console.log("Express usando Deno")
})