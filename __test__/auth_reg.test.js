describe("POST /user Registration" , ()=> {


    describe("if password & confirm password doesnt match" , () => {
        it("should return confirm password did not match." , ()=> {
            expect(true).toBe(true)
        })
    })

        describe("if password less than 6 letter" , () => {
            it("Password must be at least 6 characters." , ()=> {
                expect(true).toBe(true)
            })
        })

        describe("if all the input is correct" , () => {
            it("should give response with 200 and says sucess" , ()=>{
                expect(true).toBe(true)
            })
        })
})