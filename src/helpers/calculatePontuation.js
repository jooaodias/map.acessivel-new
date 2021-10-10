
function calculatePontuation(question) {
    if (!question) return;

    var contBlind = 0
    var contWheilchair = 0
    var contDeaf = 0

    function verifyPontuation(item) {
        var total = 0

        if (item === 'S') {
            total = 2
        } else if (item === 'N') {
            total = -2
        } else {
            total = 0
        }

        return total
    }

    function verifyTotal(theme) {
        var value;
        if(theme>2){
            value = true
        }else if(theme>=0){
            value = null
        }else{
            value = false
        }
        console.log(theme)
        return value
    }

    // console.log(question)
    question?.map((quest) => {
        // console.log(quest)
        quest[0].map((item, index) => {
            // console.log(item.value, index)
            if (index < 4) {
                contBlind += verifyPontuation(item.value, 1)
            } else if (index < 8) {
                contWheilchair += verifyPontuation(item.value, 2)
            } else {
                contDeaf += verifyPontuation(item.value, 3)
            }
        })
    }
    )

    verifyTotal()

    return {
        contBlind: verifyTotal(contBlind),
        contWheilchair: verifyTotal(contWheilchair),
        contDeaf: verifyTotal(contDeaf)
    }

}

export default calculatePontuation
