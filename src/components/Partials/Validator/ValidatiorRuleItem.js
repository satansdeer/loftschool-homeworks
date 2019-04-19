export default class ValidatorRuleItem {
    constructor(rule, message) {
        this.rule = rule;
        this.message = message;
    }

    isRequired(value) {
        return value !== undefined && value !== null && value !== '';
    }

    isNeq(value, not) {
        if(!not) {
            throw Error('for neq validation must be provided value');
        }

        return value !== not;
    }

    isEq(value, eq) {
        if(!eq) {
            throw Error('for eq validation must be provided value');
        }

        return value === eq;
    }

    isMax(value, max) {
        if(!max) {
            throw Error('for max validation must be provided value');
        }
        var intValue = parseInt(value, 10);
        if(isNaN(intValue)) {
            throw Error('unable to parse validation value');
        }
        return value <= max;
    }

    isMin(value, min) {
        if(!min) {
            throw Error('for min validation not provided value');
        }
        var intValue = parseInt(value, 10);
        if(isNaN(intValue)) {
            throw Error('unable to parse validation value');
        }
        return value >= min;
    }

    isValidByRule(rule, value) {
        var ruleParts = rule.split(':');
        switch(ruleParts[0]) {
            case 'required':
                return this.isRequired(value);
            case 'max':
                return this.isMax(value, ruleParts[1]);
            case 'min':
                return this.isMin(value, ruleParts[1]);
            case 'neq':
                return this.isNeq(value, ruleParts[1]);
            case 'eq':
                return this.isEq(value, ruleParts[1]);
            default:
                throw new Error('invalid validation rule ' + ruleParts[0]);
        }
    }

    isValueValid(value) {
        return this.isValidByRule(this.rule, value);
    }

    getErrorIfInvalid(value) {
        if (this.isValueValid(value))
            return null;;
        
        return this.message;
    }
}
