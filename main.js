$(document).ready(function () {
    $('.carousel-slide').slick({ //configura o carousel
        autoplay: true,
        arrows: true
    });

    $('.menu-burger').click(function () {
        $('nav').slideToggle(); //abre e fecha o menu
    });

    $('#lista-veiculos button').click(function () { //adiciona o nome do veiculo de interesse ao campo input
        const nomeDoVeiculo = $(this).closest('li').find('h3').text().trim();
        const destino = $('#contato')

        $('#veiculo-interesse').val(nomeDoVeiculo);

        $('html').animate({ // faz com que ao ser clicado o botao role ate o formulario
            scrollTop: destino.offset().top
        }, 1000)
    });
});
