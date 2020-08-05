
//  Form confirmation pop up 

function showFormDetailsById(){
	var showThisForm = "You are about to order the following items:\n\n";

	showThisForm += "Name: ";
	showThisForm += document.getElementById("itemDescription").value + "\n";
	showThisForm += "Quantity: ";
	showThisForm += document.getElementById("thisQty").value + "\n";
	showThisForm += "Price: ";
	showThisForm += document.getElementById("price").value + "\n";
	showThisForm += "totalPrice: ";
	showThisForm += document.getElementById("totalPrice").value + "\n";
	showThisForm += "\nIs this information correct?";
	return confirm(showThisForm);

}

//Validate form pop up 
 function validateForm() {
            var x = document.getElementById('thisQty').value;
            if(x == 0){
            alert ("Quantity cannot be zero, please enter at least 1");
            }
            if(x == null || x == "" || x == " "){
            alert ("Quantity cannot be blank, please enter at least 1");
            }
            else
            var confirmThis = showFormDetailsById();
            }

//Calculate QTY check for 0 or blank pop up 
function calculateCheck(){
    var x = document.getElementById('thisQty').value;
    if(x == 0){
    alert ("Quantity cannot be zero, please enter at least 1");
     }
    if(x == null || x == "" || x == " "){
    alert ("Quantity cannot be blank, please enter at least 1");
     }
    else
    var calclulate = calculateOrder()
     }


//Script to retrieve info via query string below. var url is passing data. new url creates and returns a url object.
//window.location.href returns the href (URL) of the current page which is in members.html.
var url = new URL(window.location.href); 

var query_string = url.search; //Search property of the URL, retreiving everything after ? in the href's on memebers.html.

params = query_string.split("?")[1].split("&"); //Gathering paramaters from Href link's in members.html. 
//Also splitting everything after ? and &. "this=copperbowl" "price=450" and "image=002" but for every href link. 
//Also when the string is split after ?, a blank string of "" is created. [1] ensures that the correct string is selected.

console.log(params); //Logging the split strings in the console.

//Loading the images
imageId = params[2].split("=")[1]; //params selecting image=002/003/006/008/009 strings as above. splitting into image id = '002' for first link. Second link is image id = '002'. 
var rows = 4; 

var columns = 5; 

str = ""; //str is  "" (string concatenation)
for(var row = 0; row < rows; row++){ //for loop. row is 0. If row (0) is less than 4 (rows) than increase (++) by 1. It then goes back and starts at 1. If 1 is less than 4 increase ++. Until it hits 4. 
    str += '<tr>'; //+= is an abbreviation for e.g. a=a+b (tr is the table row)
        for(var col = 0; col < columns; col++){ //Same idea as rows, except this section is for columns.
            str += '<td>'; //Creating the table columns 
                str += ("<img src = '../Imageslices/bcpot"+imageId+"/bcpot"+imageId+"_r" + (row+1) + "_c" + (col+1) + ".jpg' style='display:block'/>"); //image sources. Selecting images. Display block is css stopping the lines in image.
                str += '</td>'; 
            }
            str += '</tr>';
        }
        console.log(str) 
        document.getElementById("imageTable").innerHTML = str
                
//Script to display information gathered from query string (also in header section)
document.write("<p>"); //document.write ensures that text is written into the document. 
document.write("This is the "+params[0].split("=")[1]+" costing $"+params[1].split("=")[1]); //The first params is selecting this=copperbowl and splitting after the = and selecting copperbowl. 
document.write("</p>")


			
 // Form calculate total ATTEMPT inner html
 
 function calculateOrder()
{
	var x=document.getElementById("thisQty").value;
	var y=document.getElementById("price").value;
	var z=parseInt(x)*parseInt(y);

	document.getElementById("totalPriceDiv").innerHTML = '<input type="number" value="'+z+'" name="totalPrice" id="totalPrice"/>'
}	//Using inner HTML, adding everything into a div and writing out the HTML after the .innerHTML =. 

// Form clear quantity and price ATTEMPT inner html 

function resetInput()
{
	document.getElementById("thisQty").innerHtml="";
	document.getElementById("totalPrice").innerHtml="";
}

// Form price and item description parameters ATTEMPT inner html

document.getElementById("priceDiv").innerHTML = '<input type="number" id="price" value="'+params[1].split("=")[1]+'"/>';
document.getElementById("itemDescriptionDiv").innerHTML = '<input type="text" id="itemDescription" value='+params[0].split("=")[1]+' />';


// Customizng page header with parameters.
//Utilizing the div element in members_order, displaying parameters as a header in the navbar using the H3 tag. 

document.getElementById("headerDiv").innerHTML = '<h3>'+"This is the "+params[0].split("=")[1]+" costing $"+params[1].split("=")[1]+'</h3>';


//Close window 
function closeThis()
{
    if(confirm("Close Window?")){
        window.close();
    }
}

