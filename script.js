//write data
//numerical data (height,weight,shoe size)
var X = [[191, 80, 44],
     [177, 70, 43],
     [160, 60, 38],
     [154, 54, 37],
     [166, 65, 40],
     [190, 90, 47],
     [175, 64, 39],
     [177, 70, 40],
     [171, 75, 42],
     [181, 85, 43]];

//sample mix data (height,weight, favourite color)
//X=[[191,80,'blue'],[177,70,'pink'],[160,60,'red'],[154,54,'red'],[166,65,'brown'],[190,90,'yellow'],[175,64,'black'],[177,70,'blue'],[171,75,'pink'],[181,85,'green']]

//labels
Y = ['male', 'female', 'female', 'female', 'male', 'male', 'male', 'female', 'female', 'male']


//decision tree classifier

function classifier(X, Y) {

}


function get_unique_values(arr){
  return arr.filter(function(item, i, ar){
     return ar.indexOf(item) === i;
    });
}


function get_unique_labels_count(labels_list){
  var _obj = {}
  for(var i=0;i<labels_list.length;i++){
  if(_obj[labels_list[i]]==undefined){
  	_obj[labels_list[i]] = 1
  }else{
  	_obj[labels_list[i]] = _obj[labels_list[i]]+1;
  }
  }
  return _obj;
}

function gini_impurity(labels_list){
unique_labels_count = get_unique_labels_count(labels_list);
impurity = 1;
for(key in unique_labels_count){
  probability = unique_labels_count[key]/labels_list.length;
  impurity = impurity - Math.pow(probability,2);
}
return impurity;
}

function best_split(arr,labels){
  var best_gain = 0;
  var best_question = "";
  var impurity = gini_impurity(labels);//on first run impurity of whole dataset will be calculated
  for(var i=0;i<arr[0].length;i++){
    for(var j=0;j<arr.length;j++){
      var obj = ask_question_and_split(arr[j][i],arr,i);//arr[i][j] is each value in a particular column
      console.log("obj ",obj);
      //information_gain = info_gain(feature,left_branch,right_branch,impurity);
    }
  }
}

best_split(X,Y);

function info_gain(feature,left_branch,right_branch,current_impurity){
  probability = left_branch.length/(left_branch.length+right_branch.length)
  return current_impurity - probability*gini_impurity(left_branch) - (1-probability)*gini_impurity(right_branch);
}

function ask_question_and_split(feature,arr,column){

   var isNumber = !isNaN(parseFloat(feature)) && isFinite(feature);
//if feature is a number than we check >=
//otherwise if it's a string then we check ==
var left_branch  = [];
var right_branch = [];
var op = "==";//if string then find exact match

if(isNumber){
  op = ">=";//if number then find >=
}

var operators = {
    '>=': function(a, b) { return a >= b },
    '==': function(a, b) { return a == b }
};

    for(var n=0;n<arr.length;n++){
        if(operators[op](arr[n][column],feature)){
          left_branch.push(arr[n][column]);
        }else{
          right_branch.push(arr[n][column]);
        }
    }
    return {
      "left_branch":left_branch,
      "right_branch":right_branch
    }
}
