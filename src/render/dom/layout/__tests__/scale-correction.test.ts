import { pixelsToPercent, correctBoxShadow } from "../scale-correction"

describe("pixelsToPercent", () => {
    test("Correctly converts pixels to percent", () => {
        expect(pixelsToPercent(10, { min: 300, max: 500 })).toEqual(5)
    })
})

describe("correctBoxShadow", () => {
    test("Correctly scales box shadow", () => {
        expect(
            correctBoxShadow(
                "10px 10px 10px 10px #000",
                {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                },
                {
                    x: {
                        scale: 0.5,
                        translate: 0,
                        origin: 0,
                        originPoint: 0,
                    },
                    y: {
                        scale: 0.5,
                        translate: 0,
                        origin: 0,
                        originPoint: 0,
                    },
                },
                {
                    x: 1,
                    y: 1,
                }
            )
        ).toBe("20px 20px 20px 20px rgba(0, 0, 0, 1)")
        expect(
            correctBoxShadow(
                "10px 10px 10px 10px #000",
                {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                },
                {
                    x: {
                        scale: 0.5,
                        translate: 0,
                        origin: 0,
                        originPoint: 0,
                    },
                    y: {
                        scale: 0.5,
                        translate: 0,
                        origin: 0,
                        originPoint: 0,
                    },
                },
                {
                    x: 0.5,
                    y: 0.5,
                }
            )
        ).toBe("40px 40px 40px 40px rgba(0, 0, 0, 1)")
    })
})
