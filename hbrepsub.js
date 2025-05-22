// ---------------------بسم اللَّه الرحمن الرحيم-----------------------

var hbrepsubv={};

function hbrepsub(_mns,_ssst,_ssed,_reps){

    var co={};

    co.hbssst=_ssst;
    co.hbssed=_ssed;
    co.hbmns=_mns;
    co.hbreps=_reps;
    co.hbrslt=co.hbmns.slice(0,co.hbssst)+co.hbreps+co.hbmns.slice(co.hbssed+1,co.hbmns.length);
    return co.hbrslt;

};

function hbrepsubbet(_mns,_ssst,_ssed,_reps){

    var co={};

    co.hbssst=_ssst;
    co.hbssed=_ssed;
    co.hbmns=_mns;
    co.hbreps=_reps;
    co.hbrslt=co.hbmns.slice(0,co.hbssst)+co.hbreps+co.hbmns.slice(co.hbssed+1,co.hbmns.length);

    return co.hbrslt;

};
function hbgetbet(_mns,_ssst,_ssed){

    var co={};

    co.hbssst=_ssst;
    co.hbssed=_ssed;
    co.hbmns=_mns;

    co.hbrslt=co.hbmns.slice(co.hbssst,co.hbssed);

    return co.hbrslt;

};

// ---------------------إن شاء اللَّه تعالى-----------------------------
