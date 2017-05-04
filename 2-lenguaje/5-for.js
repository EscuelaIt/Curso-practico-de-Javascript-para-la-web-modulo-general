
for(var i=1; i<=10; i++) {
  document.write('<p>' + i + '</p>');
}

for(var j=100; j>=1; j -= 2 ) {
  // if(j == 50) {
  //   break;
  // }

  if(j<=50 && j>=20) {
    continue;
  }

  if(j % 3 == 0) {
    document.write('<p style="color: red;">' + j + '</p>');
  } else {
    document.write('<p>' + j + '</p>');
  }



}

