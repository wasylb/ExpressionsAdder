export default {
    isRealNumber(num: number) {
        return typeof num == 'number' && !isNaN(num) && isFinite(num);
    }
}