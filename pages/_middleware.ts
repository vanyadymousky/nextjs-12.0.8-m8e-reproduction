import { tracer } from 'dd-trace'
import { NextResponse } from 'next/server'

export default function middleware() {
    tracer.init()
    return NextResponse.next()
}