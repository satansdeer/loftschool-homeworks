import ValidatorRuleItem from './ValidatiorRuleItem';

export default class ValidatorRule {
    static Create(rule, message) {
        return new ValidatorRuleItem(rule, message);
    }
}