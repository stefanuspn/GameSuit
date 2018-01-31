$(function() {
   
    $('.klik_menu').each(function() {
        $(this).click(function() {
            var link = $(this).attr('href');
           swal({
  title: 'Loading',
  text: 'Please Wait...',
  timer: 5000,
  onOpen: () => {
    swal.showLoading()
  }
}).then((result) => {
  if (result.dismiss === 'timer') {
     redirect(link);
  }
})
            return false;
        });
    });
});

function LoadExit(){
        swal({
  title: 'Loading',
  text: 'Please Wait...',
  timer: 5000,
  onOpen: () => {
    swal.showLoading()
  }
}).then((result) => {
  if (result.dismiss === 'timer') {
    swal('Selamat!', 'Anda Berhasil Keluar!.', 'success'); setTimeout(function(){location.href='index.php'} , 1000);
  }
})
    }


var userresult = 0;
var comresult  = 0;

function GameSuit(player)
{
	var comimg = [];
	comimg[0] = "https://maxcdn.icons8.com/Share/icon/Hands//hand_scissors1600.png";
	comimg[1] = "https://maxcdn.icons8.com/Share/icon/Hands//whole_hand1600.png";
	comimg[2] = "https://maxcdn.icons8.com/Share/icon/Hands//hand_rock1600.png";
	var com = parseInt(Math.random()*3+0);

	$("#kom").hide().show(1000);
	$("#kom").attr("src",comimg[com],1000);



	var hasil = document.getElementById("hasil");


	
	if(player=="gunting"&&com==0) {
		$.StefPlaySound('audio/youdraw.mp3');
		hasil.innerHTML = "HASIL SERI !!!";
	} else if(player=="gunting"&&com==1) {
		$.StefPlaySound('audio/youwin.mp3');
		hasil.innerHTML ="Anda Menang !!!";
		userresult++;
	} else if(player=="gunting"&&com==2) {
		$.StefPlaySound('audio/youlose.mp3');
		hasil.innerHTML ="Anda Kalah !!!";
		comresult++;
	} else if(player=="kertas"&&com==0) {
		$.StefPlaySound('audio/youlose.mp3');
		hasil.innerHTML ="Anda Kalah !!!";
		comresult++;
	} else if(player=="kertas"&&com==1) {
		$.StefPlaySound('audio/youdraw.mp3');
		hasil.innerHTML ="HASIL SERI !!!";
	} else if(player=="kertas"&&com==2) {
		$.StefPlaySound('audio/youwin.mp3');
		hasil.innerHTML ="Anda Menang !!!";
		userresult++;
	} else if(player=="batu"&&com==0) {
		$.StefPlaySound('audio/youwin.mp3');
		hasil.innerHTML ="Anda Menang !!!";
		userresult++;
	} else if(player=="batu"&&com==1) {
		$.StefPlaySound('audio/youlose.mp3');
		hasil.innerHTML ="Anda Kalah !!!";
		comresult++;
	} else if(player=="batu"&&com==2){
		$.StefPlaySound('audio/youdraw.mp3');
		hasil.innerHTML ="HASIL SERI !!!";
	}

	document.getElementById("result").innerHTML =userresult;
	document.getElementById("musuh").innerHTML = comresult;

	$("#hasil").hide().slideDown();
	$("#result").hide().slideDown();
	$("#musuh").hide().slideDown();




}
