var html = '<a href="index.html"><button>Home</button></a>';

var section1 = ['Projects', 'Socials', 'About', 'Comments', 'Devlog']//write one-word link names in this list
for (i = 0; i<section1.length; i++){
  if(section1[i] == 'Comments') {
	  html += '<a href="https://www.ultraguest.com/view/1732041233"><button>Comments</button></a>'
  } else {
    html += '<a href="' + section1[i].toLowerCase() + '.html"><button>' + section1[i] + '</button></a>'
  }
}

document.getElementById("templaterr-topbar").innerHTML = html;