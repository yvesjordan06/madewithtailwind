<template>
  <div class="base-font">
  <div class="flex min-h-screen flex-col ">
    <header style='background-color:#fac94d;' class="z-20 w-screen fixed px-8 py-4 text-white flex items-center">
      <a href="#app" class="juice flex-grow text-2xl font-bold"
      >Unik Juice</a
      >
      <div style='cursor:pointer;padding:5px;font-size:12px;'
           class=" md:hidden text-white bg-orange-600 ml-4  items-center rounded-full "
           @click="menuVisible = !menuVisible"
      >Menu</div>
      <div id="navmenu" :class="{'opacity-0 pointer-events-none':!menuVisible, 'opacity-100 pointer-events-auto':menuVisible}" class="absolute transition-all md:static top-0  md:mt-0 mt-16 md:text-base text-xl z-10 md:opacity-100 md:pointer-events-auto md:bg-transparent bg-orange-600 left-0 right-0 flex flex-col md:flex-row">
        <a href="#app" @click="menuVisible = false"  style="font-style:italic;" class="ml-4  py-2 md:p-0">Accueil</a>
        <a href="#numbers" @click="menuVisible = false"  style="font-style:italic;" class="ml-4 py-2 md:p-0"> Unik</a>
        <a href="#juices" @click="menuVisible = false"  style="font-style:italic;" class="ml-4 py-2 md:p-0"> Boissons </a>
        <a href="#juices" @click="menuVisible = false"  style="font-style:italic;" class="ml-4 py-2 md:p-0"> Astuces </a>
        <a href="#equipe"  @click="menuVisible = false" style="font-style:italic;" class="ml-4 py-2 md:p-0"> Equipe</a>
        <a href="#contact" @click="menuVisible = false"  style="font-style:italic;" class="ml-4 py-2 md:p-0"> Contacts </a>
        <a href="#" @click="menuVisible = false"  style="font-style:italic;font-weight:bold;" class="md:text-orange-600  text-white ml-4">&nbsp;Fr</a>
      </div>
    </header>

    <div
      id="bg1"
      class="flex-grow hero h-screen bg-cover bg-center relative px-8 py-16 flex flex-col"
      style="padding-top:100px;  background-attachment:fixed;"
    >
      <div class="overlay"></div>
      <div class="content flex flex-col flex-grow">
        <div class="flex justify-between">
          <p class="juice text-orange-600 text-4xl font-black"></p>
          <div class="flex text-xl">
          <span
            class="mdi mdi-facebook text-white bg-orange-600 w-6 h-6 flex justify-center items-center rounded-full"
          ></span>
            <span
              class="mdi mdi-twitter text-white bg-orange-600 ml-4  w-6 h-6 flex justify-center items-center rounded-full"
            ></span>
            <span
              class="mdi mdi-google text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "
            ></span>
            <span
              class="mdi mdi-instagram text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "
            ></span>
            <span
              class="mdi mdi-phone text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "
            ></span>
          </div>
        </div>

        <div class="flex flex-col items-center flex-grow justify-center ">
          <p class="text-white text-6xl font-black font-sans">BIENVENUE</p>
          <i class='juice'>Du verger au jus</i>
          <button style="background-color: rgba(255,255,255,0.5)"
                  class=" py-2 juice mt-4 text-4xl font-bold text-gray-700 rounded-full px-16 ">Commander
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Numbers Section -->
  <div id='numbers' style="min-height:300px;border-top:1px solid #dedede;margin-bottom:20px;">
    <h3 style='text-align:center;' class='text-4xl font-sans py-2 text-black-600'>Unik Juice</h3>
    <center>
      <hr style="width:20%;margin-bottom:30px;"></hr>
    </center>
    <div class='block md:flex justify-around' style='flex-wrap:wrap;'>
      <div class='w-full md:w-1/2 lg:w-1/4 my-4'><h6 class='mt-4 text-center text-orange-600 font-bold px-16'><i>Objectifs</i></h6>
        <p class='text-center'>
          Valoriser l’usage des fruits naturels pour générer un revenu par la transformation, la
          commercialisation, la promotion de la souveraineté alimentaire par sa conservation
        </p>
      </div>
      <div class='w-full md:w-1/2 lg:w-1/4 my-4 '><h6 class='mt-4 text-center text-orange-600 font-bold px-16'><i>Missions</i></h6>
        <p class='text-center'>
          D’assurer quotidiennement au consommateur une garantie sur l'authenticité et les bienfaits des
          produits qui lui sont proposés afin d’améliorer une croissance durable par une qualité innovante
        </p>
      </div>
      <div class='w-full md:w-1/2 lg:w-1/4'><h6 class='mt-4 text-center text-orange-600 font-bold px-16'><i>Vision</i></h6>
        <p class='text-center'>
          Développer une stratégie de commercialisation et vente afin d’augmenter la productivité et la
          consommation et devenir la première entreprise de transformation de fruits d’ici 2030.
        </p>
      </div>
    </div>
  </div>
  <!-- Numbers Section -->

  <div id="unik" style="min-height:300px;background-color:#fac94d;">
    <h3 style='text-align:center;' class='text-white text-4xl py-2 font-sans'> A Propos </h3>
    <center>
      <hr style="width:20%;"></hr>
    </center>
    <p class='py-2 hidden md:block' style='text-align:center;'>
      <i>Les fruits sont source de vie, de plaisir et de santé</i></br></br>
    </p>
    <p style='text-align:center; ' class='text-2xl mt-5 juice'>Nous produisons des jus de fruit 100% naturel et à
      la conservation impécable ! </p>

    <div class="justify-center flex text-xl">
      <button class="bg-orange-600 py-2 juice mt-4 text-4xl font-bold text-white rounded-full px-16 ">Commander
      </button>
    </div>
  </div>
  <div id="juices" style="min-height:300px;">
    <h3 style='text-align:center;' class='text-4xl font-sans py-2 text-orange-600'> Nos Boissons </h3>
    <center>
      <hr style="width:20%;margin-bottom:50px;" class='bg-orange-600 text-4xl font-bold text-orange-600'></hr>
    </center>

    <center><i class='juice' style='font-size:16px;'> Nous vous souhaitons un bon rafraichissement </i></center>
    <div class='block md:flex' style='margin-top:40px;flex-wrap:wrap;width:100%;'>
      <div class='md:w-1/3 lg:w-1/4' style='margin:0px;height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus1.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus d'Orange</h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus2.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus d'Ananas</h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus3.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus de Citron</h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='margin:0px;height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus5.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus de Cassimanga </h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='margin:0px;height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus8.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus de Pastèque </h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='margin:0px;height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus7.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus de Corrosol </h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='margin:0px;height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus4.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus de Papaye </h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='margin:0px;height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus10.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus de Gingembre </h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='margin:0px;height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus10.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus de Mangue </h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='margin:0px;height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus10.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus de Pamplemousse </h2> </p>
      </div>
      <div class='md:w-1/3 lg:w-1/4' style='margin:0px;height:240px;text-align:center;'><center><img style='width:200px;height:200px;'                                                            src='/unik/images/jus10.jpg' class="tile"></center>
        <p> <h2 style='text-transform:uppercase;font-weight:bold;'>Jus de Mandarine </h2> </p>
      </div>
    </div>
  </div>
  <div class='mt-8 py-2 px-16 bg-gray-800'>
    <p class="text-3xl text-center text-white font-sans">LE SAVIEZ VOUS ?</p>
    <div class="flex justify-between items-center">
      <button class="mdi mdi-chevron-left focus:outline-none font-black text-3xl text-gray-300 opacity-75 w-12 h-12 rounded-full hover:opacity-100"
              href="#" @click="prev('tip')"></button>
      <transition-group name="fade" tag="div" class="h-48  flex-grow">
        <div v-for="i in [tipIndex]" :key="i"
             class='text-center w-full h-full flex flex-col justify-center text-gray-700'>

          <p style='font-size:20px;' class='text-gray-200'>{{currentTip}}</p>
        </div>
      </transition-group>
      <button class="mdi mdi-chevron-right focus:outline-none font-black text-3xl text-gray-300 opacity-75 w-12 h-12 rounded-full hover:opacity-100"
              href="#" @click="next('tip')"></button>
    </div>
  </div>

  <div id="equipe" style="margin-bottom:50px;margin-top:35px;">
    <h3 style='text-align:center;' class='text-4xl font-sans py-2 text-orange-600'> Notre Equipe </h3>
    <center>
      <hr style="width:20%;margin-bottom:30px;"></hr>
    </center>
    <div class='block' style='justify-content:space-around;flex-wrap:wrap;'>

      <div class="py-8 w-full px-16">
        <p class="text-center text-3xl font-bold">Unik Juice</p>
        <div class="mt-8 md:flex">
          <div class="md:w-full lg:w-1/3 px-4 contact-card">
            <div class="shadow-lg py-4 rounded-lg w-full">
              <div class="mx-auto w-32 h-32 photo rounded-full overflow-hidden"></div>
              <p class="text-center mt-2 font-bold">Clémence Noutcha</p>
              <p class="text-center text-gray-500 mt-2 font-bold"><small>Promotrice du Projet</small></p>
              <p class="text-center mt-2 text-gray-600 text-sm">
                +237 694842185
              </p>
              <p class="text-center mt-1 text-gray-600 text-sm">
                Cameroon, Yaoundé
              </p>
              <div class="flex mt-4 px-4 justify-center justify-around">
                <a href="#" class="w-8 h-8 rounded-full  bg-blue-800 text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-facebook" targer="blank"></a>
                <a href="#" class="w-8 h-8 rounded-full  bg-blue-500 text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-telegram" targer="blank"></a>
                <a href="#" class="w-8 h-8 rounded-full  bg-black text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-git" targer="blank"></a>
              </div>
            </div>
          </div>
          <div class="md:w-full lg:w-1/3 px-4 contact-card">
            <div class="shadow-lg py-4 rounded-lg w-full">
              <div class="mx-auto w-32 h-32 photo rounded-full overflow-hidden"></div>
              <p class="text-center mt-2 font-bold">Hiro Hamada</p>
              <p class="text-center text-gray-500 mt-2 font-bold"><small>Web Master</small></p>
              <p class="text-center mt-2 text-gray-600 text-sm">
                +237 694842185
              </p>
              <p class="text-center mt-1 text-gray-600 text-sm">
                Cameroon, Yaoundé
              </p>
              <div class="flex mt-4 px-4 justify-center justify-around">
                <a href="#" class=" rounded-full w-8 h-8 bg-blue-800 text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-facebook" targer="blank"></a>
                <a href="#" class=" rounded-full w-8 h-8 bg-blue-500 text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-telegram" targer="blank"></a>
                <a href="#" class=" rounded-full w-8 h-8 bg-black text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-git" targer="blank"></a>
              </div>
            </div>
          </div>
          <div class="md:w-full lg:w-1/3 px-4 contact-card">
            <div class="shadow-lg py-4 rounded-lg w-full">
              <div class="photo mx-auto w-32 h-32 rounded-full overflow-hidden"></div>
              <p class="text-center mt-2 font-bold">Aurelie Nguejang</p>
              <p class="text-center text-gray-500 mt-2 font-bold"><small>Communicatrice</small></p>
              <p class="text-center mt-2 text-gray-600 text-sm">
                +237 694842185
              </p>
              <p class="text-center mt-1 text-gray-600 text-sm">
                Cameroon, Yaoundé
              </p>
              <div class="flex mt-4 px-4 justify-center justify-around">
                <a href="#" class="w-8 h-8 rounded-full  bg-blue-800 text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-facebook" targer="blank"></a>
                <a href="#" class="w-8 h-8 rounded-full  bg-blue-500 text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-telegram" targer="blank"></a>
                <a href="#" class="w-8 h-8 rounded-full  bg-black text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-git" targer="blank"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='py-2 px-16'>
      <p class="text-3xl text-center text-orange-600 font-sans">NOS CLIENTS</p>
      <div class="flex justify-between items-center">
        <button class="mdi mdi-chevron-left focus:outline-none font-black text-3xl text-gray-600 opacity-75 w-12 h-12 rounded-full hover:opacity-100"
                href="#" @click="prev"></button>
        <transition-group name="fade" tag="div" class="h-64  flex-grow">
          <div v-for="i in [currentIndex]" :key="i"
               class='text-center w-full h-full flex flex-col justify-center text-gray-700'>
            <p class='italic font-bold juice text-3xl'>
              {{currentImg.review}}
            </p>
            <p class='mt-4 text-sm'>{{currentImg.user}}</p>
          </div>
        </transition-group>
        <button class="mdi mdi-chevron-right focus:outline-none font-black text-3xl text-gray-600 opacity-75 w-12 h-12 rounded-full hover:opacity-100"
                href="#" @click="next"></button>
      </div>
    </div>


    <!-- Numbers Section -->
    <div id='numbers' style="min-height:300px;border-top:1px solid #dedede;margi-bottom:20px;">
      <h3 style='text-align:center;' class='text-4xl font-sans py-2 text-black-600'> Contactez Nous </h3>
      <center>
        <hr style="width:20%;margin-bottom:30px;"></hr>
      </center>
      <div style='height:100px;' class='flex justify-around'>
        <div>
          <div class='flex my-3'>
            <span class="mdi mdi-map-marker text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "></span>
            <span style='margin-left:10px;font-size:12px;'> Yaoundé, CMR </span>
          </div>
          <div class='flex my-3'>
            <span class="mdi mdi-phone text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "></span>
            <span style='margin-left:10px;font-size:12px;'> +237 699 690 829 </span>
          </div>
          <div class='flex my-3'>
            <span class="mdi mdi-phone text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "></span>
            <span style='margin-left:10px;font-size:12px;'> +237 652 724 829 </span>
          </div>
        </div>
        <div>
          <div class='flex my-3'>
            <span class="mdi mdi-facebook text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "></span>
            <span style='margin-left:10px;font-size:12px;'> unikjuice </span>
          </div>
          <div class='flex my-3'>
            <span class="mdi mdi-google text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "></span>
            <span style='margin-left:10px;font-size:12px;'> unikjuice@gmail.com </span>
          </div>
          <div class='flex my-3'>
            <span class="mdi mdi-twitter text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "></span>
            <span style='margin-left:10px;font-size:12px;'> unikjuiz </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Numbers Section -->
    <center>Copyright <a href='#' style='color:#fac94d;'>No Time to Sleep</a></center>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Marck+Script&display=swap'
        }
      ]
    }
  },
  data() {

    return {
      menuVisible: false,
      tips: [
        "L'Orange est riche en antioxydant et en Vitamine C, améliore la digestion et surtout renforce la vue",
        "L'Ananas favorise l’élimination des toxines etl utte contre la constipation",
        "La Papaye en plus d'être un amaincissant, améliore la vue",
        "Le Corrosol est un puissant anti-cancer",
        "Le Gingembre,aphrodisiaque,anti-cancérigène,anti-bactérien et anti-inflammatoire",
        "La Pastèque, un atout pour la santé cardiaquePour et pour rester jeune",
        "Le Cassimanga,Efficace contre les maladies du foie et les maladies cardiovasculaires",
        "Le Citron vous, Protège les reins,la vessie,le foie et le pancréas, est un antibiotique, un antiviral et dépure les artères."
      ],
      images: [
        {
          review: "C'est mervielleux les jus de fruit ici",
          user: "NGABA SIDA FRANCK"
        },
        {
          review:
            "C'est tellement bon et c'est si moins chere, je vous le conseils",
          user: "TONG HENRY JEFF"
        },
        {
          review:
            "Ca ne m'as pas trop plu, mais les decoration et le wifi gratuit, C'est hyper genial!!!",
          user: "Thierry Staphane"
        }
      ],
      timer: null,
      timer2: null,
      currentIndex: 0,
      tipIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
    this.startSlide('tip');

  },

  methods: {
    startSlide: function (type) {
      if (type === 'tip') {
        clearInterval(this.timer2);
        this.timer2 = setInterval(() => this.next('tip'), 5000);
      } else {
        clearInterval(this.timer);
        this.timer = setInterval(this.next, 5000);
      }


    },

    next: function (type) {
      if (type === 'tip') {
        this.tipIndex += 1;
      } else {
        this.currentIndex += 1
      }
      this.startSlide(type);
    },
    prev: function (type) {
      if (type === 'tip') {
        this.tipIndex -= 1;
      } else {
        this.currentIndex -= 1
      }
      this.startSlide(type);
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    currentTip: function () {
      return this.tips[Math.abs(this.tipIndex) % this.tips.length];
    }
  }
}
</script>

<style scoped>
  #bg1 {
    background-image: url('/unik/images/photos.jpg');
  }
  .fade-enter-to {
    transition: all linear 2s;
    opacity: 1;
  }
  .fade-leave {
    display: none;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave-to {
  }

  .tile {
    border-radius: 100%;
    overflow: hidden;
    margin-top: 8px;
    transition: all linear 0.3s
  }

  .tile:hover {
    border-radius: 0%;

  }

  .juice {
    font-family: 'Marck Script', cursive;
  }
  .overlay {
    background-color: rgba(255,255,255,0.125);
    position: absolute;
    top:0; bottom:0; right:0; left:0;
    z-index:0;
  }

  .hero .content{
    position: relative;
    z-index: 10
  }

  /* 3D Team */
  .wrap {
    perspective: 800px;
    perspective-origin: 50% 100px;
  }

  .cube
  {
    position: relative;
    width: 200px;
    transform-style: preserve-3d;
  }

  .cube div
  {
    position: absolute;
    width: 100px;
    height: 100px;
  }

  .back {
    transform: translateZ(-100px) rotateY(180deg);
  }
  .right {
    transform: rotateY(-270deg) translateX(100px);
    transform-origin: top right;
  }
  .left {
    transform: rotateY(270deg) translateX(-100px);
    transform-origin: center left;
  }
  .top {
    transform: rotateX(-90deg) translateY(-100px);
    transform-origin: top center;
  }
  .bottom {
    transform: rotateX(90deg) translateY(100px);
    transform-origin: bottom center;
  }
  .front {
    transform: translateZ(100px);
  }
  @keyframes spin {
    from { transform: rotateY(0); }
    to { transform: rotateY(360deg); }
  }

  .cube {
    animation: spin 7s infinite linear;
  }

  @keyframes spin-vertical {
    from { transform: rotateX(0); }
    to { transform: rotateX(-360deg); }
  }

  .cube-wrap.vertical .cube {
    margin: 0 auto;

    transform-origin: 0 100px;
    /*animation: spin-vertical 5s infinite linear;*/
  }

  .cube-wrap.vertical .top {
    transform: rotateX(-270deg) translateY(-100px);
  }

  .cube-wrap.vertical .back {
    transform: translateZ(-100px) rotateX(180deg);
  }

  .cube-wrap.vertical .bottom {
    transform: rotateX(-90deg) translateY(100px);
  }
  /* 3D Team */
.base-font {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
  scroll-behavior: smooth;
}
.contact-card {
  transition: all linear 0.5s;
}
.contact-card:hover {
  padding: 0;
}
.photo {
  background-size: 100% 100%;
  background-image: url('/unik/images/user.jpg');
}
.juice {
  font-family: 'Marck Script', cursive;
}
.overlay {
  background-color: rgba(255, 255, 255, 0.125);
  @apply absolute inset-0 z-0;
}

.hero .content {
  @apply relative z-10;
}

  .transition-all{
    transition: all linear 0.3s;
  }
</style>
