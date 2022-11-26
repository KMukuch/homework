//Ունենք օբյեկտ, որտեղ պահված է աշխատողների աշխատավարձերի մասին ինֆո

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

summary_salaries=0;
for (let i in salaries){
    summary_salaries=summary_salaries+salaries[i];
};

console.log(summary_salaries);

//2. Գրեք ֆունկցիա multiplyNumeric(obj), որը ընդունում է օբյեկտ, բազմապատկում բոլոր թվային արժեքները 2-ով և հետ վերադարձնում այդ օբյեկտը, օրինակ ունենք

const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multilpyNumeric(menu){
    for (let i in menu){
        if (isNaN(menu[i])!==true){
            menu[i]=menu[i]*2;
        };
    };
    return menu;
};

console.log(multilpyNumeric(menu));

//3. Ստեղծեք ladder օբյեկտ, որը թույլ է տալիս բարձրանալ վերև կամ ներքև, կաղմված մեթոդի կանչից։

ladder={
    step:0,
    showStep: function(){
        return console.log(this.step);
    },
    up: function(){
        return console.log(this.step=this.step+1);
    },
    down: function(){
        return console.log(this.step=this.step-1);
    },
};

ladder.showStep(); // 0 (տպում է այն աստիճանը, որում մենք գտնվում ենք)
ladder.up();
ladder.up();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1