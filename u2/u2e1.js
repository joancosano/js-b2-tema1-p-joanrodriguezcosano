// T1. Uso avanzado de funciones
// U2. Métodos reduce y forEach
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

class ClassroomReport{

    #studentList;

    constructor (studentList) {
        (!studentList) 
        ? this.#studentList =  new Array()
        : this.#studentList = studentList;
    }
    
    get studentList() {
        return this.#studentList 
    }
    
    set studentList(list){
        this.#studentList = list
    }

    getStudentsNumber (excludeInactive = true){ 

        return this.#studentList.reduce((count, student) =>{

            if (excludeInactive && !student.active){
                return count
            }else return count+1

        },0
    )}
    
    averageScore (excludeInactive = true){

         const result = this.#studentList.reduce((score, student) =>{

            if (excludeInactive && !student.active){
                return score
            }else{
                score.sum += student.score;
                score.count++
            }return score
        },

        {sum: 0, count: 0});

        return result.count === 0 ? 0 : Number((result.sum / result.count).toFixed(2));
    }

    bestStudent (excludeInactive = true){
        
        let best = null;
        
        this.#studentList.forEach(student => {
            
            if (excludeInactive && !student.active){
                return;
            }else if (!best || student.score >= best.score)
                { 
                    best = student
                }
        })
        return best
    }
    
    worstStudent (excludeInactive = true){
        
        let worst = null;
        
        this.#studentList.forEach(student => {
            
            if (excludeInactive && !student.active){
                return;
            }else if (!worst || student.score <= worst.score)
                { 
                    worst = student
                }
        })
        return worst
    }
    
    passedCount(excludeInactive = true){

        return this.#studentList.reduce((quantity, student)=>{

            if (excludeInactive && !student.active) return quantity;
            if (student.score >= 5) return quantity+1;
            return quantity;
        }, 0)
    }

    failedCount(excludeInactive = true){

            return this.#studentList.reduce((quantity, student)=>{

            if (excludeInactive && !student.active) return quantity;
            if (student.score < 5) return quantity+1;
            return quantity;
        }, 0)

    }

}


/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { ClassroomReport };
