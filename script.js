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
  for(var i=0;i<Y.length;i++){
  if(_obj[Y[i]]==undefined){
  	_obj[Y[i]] = 1
  }else{
  	_obj[Y[i]] = _obj[Y[i]]+1;
  }
  }
  return _obj;
}

function gini_impurity(labels_list){
unique_labels_count = get_unique_labels_count(labels_list);
impurity = 1;
for(key in unique_labels_count){
  probability = unique_labels_count[key]/Object.keys(unique_labels_count).length;
  impurity = impurity - Math.sqrt(probability);
}
}

function best_split(arr){
  var best_gain = 0;
  var best_question = "";
  var impurity = gini_impurity(arr);//on first run impurity of whole dataset will be calculated
  for(var i=0;i<arr[0].length;i++){
    for(var j=0;j<arr.length;j++){
      ask_question(arr[i][j],arr,i);//arr[i][j] is each value in a particular column
    }
  }
}



function ask_question(feature,arr,column){

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
        if(operator[op](arr[n][column],feature)){
          right_branch.push(arr[n][column]);
        }else{
          left_branch.push(arr[n][column]);
        }
    }

}
