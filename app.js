function getValue(value)
{
    var value;
    document.getElementById("result").value += value;
};

function clearAll()
{
    document.getElementById("result").value = "";
};

function getAnswer()
{
    var tempAnswer;
    tempAnswer = document.getElementById("result").value;
    answer = eval(tempAnswer);
    document.getElementById("result").value = answer;
};
