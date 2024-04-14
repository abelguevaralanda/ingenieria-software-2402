
import {describe, expect, test } from 'vitest'
import {verificationSymbols} from "./DataStructureExercise.ts";

describe('Given a function verificationSymbols', () => {
    describe('When it is called', () => {
        test('Then should it defined', () => {
            expect(verificationSymbols).toBeDefined()
        })
    });
});