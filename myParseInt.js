/**
 * Created by PC on 18.05.2016.
 */
function isMathExpression(str) {
    var index;
    var quest;
    var result;

    for (index = 0; index < str.length; index++) {
        console.log(str[index]);
        quest = str[index];

        if (arrMath.indexOf(quest) >= 0) {
            result = true;

        } else {
            result = false;
            break
        }
    }

    return result;
}