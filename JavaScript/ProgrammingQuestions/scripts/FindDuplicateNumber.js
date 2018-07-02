function DuplicateNumber(a) {
    var i;
    var previousNumber = 0;
    for (i=0; i < a.length; i++)
    {
        if (previousNumber == a[i])
            break;
        previousNumber = a[i];
    }
    return previousNumber;
}