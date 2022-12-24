class Calculator {

    constructor() {
        this.operandA = '';
        this.operandB = '';
        this.operation = '';
        this.flag = false
        this.getData()
        this.screen = document.querySelector('.calc-screen > p')
    }

    getData() {
        let self = this;

        document.querySelector('.clear').addEventListener('click', function() {
            self.screen.innerText = '';
            self.operandA = '';
            self.operandB = '';
            self.operation = '';
            self.flag = false
            console.log(self)
        })

        document.querySelector('.plus-minus').addEventListener('click', function() {
            if ((self.flag == true) || (self.operation == '')) {
                if (self.operandA.includes('-')) {
                    let value = self.operandA.split('')
                    value.shift()
                    self.operandA = value.join('')
                    self.screen.innerText = self.operandA  
                    console.log(self)
                } else {
                  let value = self.operandA.split('')
                  value.unshift('-')
                  self.operandA = value.join('')
                  self.screen.innerText = self.operandA  
                  console.log(self)
                }
            } else {
                if (self.operandB.includes('-')) {
                    let value = self.operandB.split('')
                    value.shift()
                    self.operandB = value.join('')
                    self.screen.innerText = self.operandB  
                    console.log(self)
                } else {
                  let value = self.operandB.split('')
                  value.unshift('-')
                  self.operandB = value.join('')
                  self.screen.innerText = self.operandB  
                  console.log(self)
                }
            }


        })

        document.querySelectorAll('.number').forEach(num => {
            num.addEventListener('click', function(e) {
                
                if (self.flag == true) {
                    self.flag = false
                    self.operandB = ''
                    self.operandB = e.target.innerText
                    self.screen.innerText = self.operandB
                    return
                }

                if (self.operandA && self.operation ) {
                    self.operandB += e.target.innerText
                    self.screen.innerText = self.operandB;
                    console.log(self)
                    return
                }

                self.operandA += e.target.innerText
                self.screen.innerText = self.operandA
                console.log(self)
            })
        })

        document.querySelectorAll('.oper').forEach(oper => {
            oper.addEventListener('click', function(e) {
                self.operation = e.target.innerText
                self.screen.innerText = e.target.innerText
                console.log(self)
            })
        })

        document.querySelector('.equal').addEventListener('click', function() {
            if (!self.operandA || !self.operandB) return
            self.count()
        })
        
    }

    count() {
    
       let self = this 
      
        switch (self.operation) {
            case '+': {
                self.screen.innerText = +self.operandA + +self.operandB;
                console.log(self)
            }
            break

            case '-': {
                self.screen.innerText = +self.operandA - +self.operandB;
                console.log(self);
            }
            break

            case 'X': {
                self.screen.innerText = +self.operandA * +self.operandB;
                console.log(self);
            }
            break

            case '/': {
                self.screen.innerText = +self.operandA / +self.operandB;
                console.log(self);
            }
            break
        }

        self.operandA = self.screen.innerText
        self.flag = true
        console.log(self)
    }

}

let calculator = new Calculator()

console.log(calculator)