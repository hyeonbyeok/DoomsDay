class Regex{

    constructor(){

    }

    static isValidNumber(value){
        return /^\d+$/.test(value);
    }

    static lengthCheck(value, length){
        return value.length === length;
    }

    static isDateValid(value){
        return /^\d{4}[0-1][0-9][0-3][0-9]$/.test(value);
    }

}