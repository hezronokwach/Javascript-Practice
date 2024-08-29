function trunc(num) {
    if (num < 0) {
        return -trunc(-num);
    }

    let answer = 0;
    let multiplier= 1;

    while (multiplier* 10 <= num) {
        multiplier*= 10;
    }

    while (multiplier>= 1) {
        while (answer + multiplier<= num) {
            answer += multiplier;
        }
        multiplier/= 10;
    }

    return answer;
}
const round =(num) => num < 0 ? -trunc(-num + 0.5) : trunc(num + 0.5);
const floor = (num) => num < 0 ? trunc(num) - (num !== trunc(num) ? 1 : 0) : trunc(num);
const ceil =(num) => num < 0 ? trunc(num) : (num !== trunc(num) ? trunc(num) + 1 : trunc(num));
