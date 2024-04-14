
import { describe, expect, test, } from 'vitest'
import {verificationSymbols} from "./DataStructureExercise.ts";

describe('Given a function verificationSymbols', () => {

    describe('When it is called', () => {
        test('Then should it defined', () => {
            expect(verificationSymbols).toBeDefined()
        })

        test('Then should receives a string', () => {
            expect(verificationSymbols('')).toBe(true)
        })
    });

    describe.each`
    symbols | expected
    ${''} | ${true}
    ${'()'} | ${true}
    ${'[]'} | ${true}
    ${'{}'} | ${true}
    ${'([{}])'} | ${true}
    ${'[({[]})]'} | ${true}
    ${'({[]})]'} | ${false}
    ${'[{[]})'} | ${false}
    `('When it is called with $symbols = symbols couples string', ({ symbols, expected }) => {
        test(`Then should return $expected = ${expected} result`, () => {
            expect(verificationSymbols(symbols)).toBe(expected)
        })
    })
});