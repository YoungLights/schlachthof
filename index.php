<!doctype html>
<html lang='de'>
	<head>
		<?php 
			require_once "inc/bootstrap.php";
			include "inc/template/head.php"; 
		?>	
	</head>
	<body>
		<?php 
			include 'inc/template/header.php';
			include 'inc/views/_overlays.php';
			if(isset($_GET['page'])) {
				include 'inc/template/backbtn.php';
				include 'inc/views/'.$_GET['page'].'.php';
			} else {
				include 'inc/template/nav.php';
				include 'inc/template/slider.php';
				include 'inc/views/_news-events.php';
				include 'inc/views/_unsere-arbeit.php';
				include 'inc/views/_offener-treff_3.php';
				include 'inc/views/_kurse.php';
				include 'inc/views/_ferien.php';
				include 'inc/views/_maedchenarbeit.php';
				include 'inc/views/_raeume.php';
				include 'inc/views/_team.php';
			}
			include 'inc/views/_kontakt.php';
			include 'inc/template/google-map.php';
			include 'inc/template/footer.php';
		?>

		<!-- INCLUDING JQUERY, BXSLIDER.JS AND CUSTOM JQUERY SCRIPTS -->
		<script>
			var root = "<?php echo ROOT; ?>";
		</script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="<?php echo ROOT; ?>js/init-map.js"></script>
		<script src="<?php echo ROOT; ?>js/style-map.js"></script>
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMVQZMbHABCrfPg_f3C27myi7Yol-BwQg&callback=initMap"></script>
		<script src='<?php echo ROOT; ?>js/main.js'></script>
		<script src="<?php echo ROOT; ?>js/slick.js"></script>
		<script src="<?php echo ROOT; ?>js/jquery.bxslider.js"></script>
		<script type="module">
			import jump from './node_modules/jump.js/dist/jump.module.js';
			
			$(document).ready(function(){
				const btns = document.querySelectorAll('.btn-scroll');

				btns.forEach((btn) => {
					const target = btn.dataset.target;

					btn.addEventListener('click', (e) => {       
						e.preventDefault();
						let duration = e.target.dataset.duration;

						if(duration === undefined) {
							duration = 1000;
						}

						let offSet;
						
						if ($(window).width() > 1024) {
							offSet = 0;
						} else {
							offSet = 1;
						}
						
						jump(target,{
							duration: duration, 
							offset: offSet
						});
					});
				});		
			});
		</script>
	</body>
</html>