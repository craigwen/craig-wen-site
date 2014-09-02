	
	var capText = document.getElementById("main").innerHTML;
    capText = capText.toLowerCase();
    capText = capText.replace(/\.\n/g, ".[-<br>-]. ");
	capText = capText.replace(/\.\s\n/g, ". [-<br>-]. ");
	capText = capText.replace(/<p>/g, ".[--<br>--]. ");

	var wordArray = capText.split('. ');
    console.log(wordArray);
	var numWords = wordArray.length;

	for (x = 0; x < numWords; x++) {
       console.log("x = " + x + wordArray[x]);
		wordArray[x] = wordArray[x].replace(wordArray[x].charAt(0), wordArray[x].charAt(0).toUpperCase());
			if (x == 0) {
				capText = wordArray[x] + ". ";
			} else if (x != numWords - 1) {
				capText = capText + wordArray[x] + ". ";
			} else if (x == numWords - 1) {
				capText = capText + wordArray[x];
			}
		} 
    capText = capText.replace(/.\[--<br>--\]\.\s/g,"<p>");
	capText = capText.replace(/\[-<br>-\]\.\s/g, "\n");
	capText = capText.replace(/\si\s/g, " I ");
	console.log("Final capText = "+capText);
	document.getElementById("capitalized").innerHTML=capText;