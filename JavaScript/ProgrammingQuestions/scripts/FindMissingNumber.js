function basicsumming(a) {
    var i;
    var sum = 0;
    var mathSum = 0;
    var missingnumber = 0;
    for (i=0; i < a.length; i++)
    {
        sum = sum + a[i];
    }

    mathSum = a[a.length - 1] * (a[a.length - 1] + 1)/2
    missingnumber = mathSum - sum;
    return missingnumber;
}

function duplicatenumbers(a) {
    var j;
    var pn = 0;
    var nn = 0;
    var mn
    a.sort(function(a, b){return a - b});;
    for (j=0; j < a.length - 1; j++)
    {
        if (nn == a[j] || j == 0)
        {
            nn = a[j] + 1;
            pn = a[j];
        }
        else
        mn = nn;
    }

    return mn;
}   