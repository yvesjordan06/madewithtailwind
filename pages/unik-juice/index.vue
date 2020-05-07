<template>
  <div class="base-font">
  <div class="flex flex-col min-h-screen ">
    <header style='background-color:#32CD32;' class="fixed z-20 flex items-center w-screen px-8 py-4 text-white">
      <a href="#app" class="flex-grow text-2xl font-bold juice"
      >Unik Juice</a
      >
      <div style='cursor:pointer;padding:5px;font-size:12px;'
           class="items-center ml-4 text-white rounded-full color-1 md:hidden"
           @click="menuVisible = !menuVisible"
      >Menu</div>
      <div id="navmenu" :class="{'opacity-0 pointer-events-none':!menuVisible, 'opacity-100 pointer-events-auto':menuVisible}" class="absolute top-0 left-0 right-0 z-10 flex flex-col mt-16 text-xl transition-all color-1 md:static md:mt-0 md:text-base md:opacity-100 md:pointer-events-auto md:bg-transparent md:flex-row">
        <a href="#app" @click="menuVisible = false"  style="font-style:italic;" class="py-2 ml-4 md:p-0">Accueil</a>
        <a href="#numbers" @click="menuVisible = false"  style="font-style:italic;" class="py-2 ml-4 md:p-0"> Unik</a>
        <a href="#juices" @click="menuVisible = false"  style="font-style:italic;" class="py-2 ml-4 md:p-0"> Boissons </a>
        <a href="#juices" @click="menuVisible = false"  style="font-style:italic;" class="py-2 ml-4 md:p-0"> Astuces </a>
        <a href="#equipe"  @click="menuVisible = false" style="font-style:italic;" class="py-2 ml-4 md:p-0"> Equipe</a>
        <a href="#contact" @click="menuVisible = false"  style="font-style:italic;" class="py-2 ml-4 md:p-0"> Contacts </a>
        <a href="#" @click="menuVisible = false"  style="font-style:italic;font-weight:bold;" class="ml-4 text-white md:text-orange-600">&nbsp;Fr</a>
      </div>
    </header>

    <div
      id="bg1"
      class="relative flex flex-col flex-grow h-screen px-8 py-16 bg-center bg-cover hero"
      style="padding-top:100px;  background-attachment:fixed;"
    >
      <div class="overlay"></div>
      <div class="flex flex-col flex-grow content">
        <div class="flex justify-between">
          <p class="text-4xl font-black text-orange-600 juice"></p>
          <div class="flex text-xl">
          <span
            class="flex items-center justify-center w-6 h-6 text-white rounded-full color-1 mdi mdi-facebook"
          ></span>
            <span
              class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-twitter"
            ></span>
            <span
              class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-google "
            ></span>
            <span
              class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-instagram "
            ></span>
            <span
              class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-phone "
            ></span>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center flex-grow ">
          <p class="font-sans text-4xl font-black text-white md:text-6xl">BIENVENUE</p>
          <i class='juice'>Du verger au jus</i>
          <button style="background-color: rgba(255,255,255,0.5)"
                  class="px-16 py-2 mt-4 text-2xl font-bold text-gray-700 rounded-full md:text-4xl juice">Commander
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Numbers Section -->
  <div id='numbers' style="min-height:300px;border-top:1px solid #dedede;margin-bottom:20px;">
    <h3 style='text-align:center;' class='py-2 font-sans text-4xl text-black-600'>Unik Juice</h3>
    <center>
      <hr style="width:20%;margin-bottom:30px;"></hr>
    </center>
    <div class='justify-around block md:flex' style='flex-wrap:wrap;'>
      <div class='w-full my-4 md:w-1/2 lg:w-1/4'><h6 class='px-16 mt-4 font-bold text-center ' style="color: #008000"><i>Objectifs</i></h6>
        <p class='text-center'>
          Valoriser l’usage des fruits naturels pour générer un revenu par la transformation, la
          commercialisation, la promotion de la souveraineté alimentaire par sa conservation
        </p>
      </div>
      <div class='w-full my-4 md:w-1/2 lg:w-1/4 '><h6 class='px-16 mt-4 font-bold text-center ' style="color: #008000"><i>Missions</i></h6>
        <p class='text-center'>
          D’assurer quotidiennement au consommateur une garantie sur l'authenticité et les bienfaits des
          produits qui lui sont proposés afin d’améliorer une croissance durable par une qualité innovante
        </p>
      </div>
      <div class='w-full md:w-1/2 lg:w-1/4'><h6 class='px-16 mt-4 font-bold text-center ' style="color: #008000"><i>Vision</i></h6>
        <p class='text-center'>
          Développer une stratégie de commercialisation et vente afin d’augmenter la productivité et la
          consommation et devenir la première entreprise de transformation de fruits d’ici 2030.
        </p>
      </div>
    </div>
  </div>
  <!-- Numbers Section -->

  <div id="unik" style="min-height:300px;background-color: #708d23;">
    <h3 style='text-align:center;' class='py-2 font-sans text-4xl text-white'> A Propos </h3>
    <center>
      <hr style="width:20%;"></hr>
    </center>
    <p class='hidden py-2 md:block' style='text-align:center;'>
      <i>Les fruits sont source de vie, de plaisir et de santé</i></br></br>
    </p>
    <p style='text-align:center; ' class='mt-5 text-2xl text-white juice'>Nous produisons des jus de fruit 100% naturel et à
      la conservation impécable ! </p>

    <div class="flex justify-center text-xl">
      <button class="px-16 py-2 mt-4 text-4xl font-bold text-white rounded-full color-1 juice ">Commander
      </button>
    </div>
  </div>
  <div id="juices" style="min-height:300px;">
    <h3 style='text-align:center; color: #008000' class='py-2 font-sans text-4xl '> Nos Boissons </h3>
    <center>
      <hr style="width:20%;margin-bottom:50px;" class='text-4xl font-bold text-orange-600 color-1'></hr>
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
     
    </div>
  </div>
  <div class='px-2 py-2 mt-8 bg-gray-800 md:px-16'>
    <p class="font-sans text-3xl text-center text-white">LE SAVIEZ VOUS ?</p>
    <div class="flex items-center justify-between">
      <button class="w-12 h-12 text-3xl font-black text-gray-300 rounded-full opacity-75 mdi mdi-chevron-left focus:outline-none hover:opacity-100"
              href="#" @click="prev('tip')"></button>
      <transition-group name="fade" tag="div" class="flex-grow h-48">
        <div v-for="i in [tipIndex]" :key="i"
             class='flex flex-col justify-center w-full h-full text-center text-gray-700'>

          <p style='font-size:20px;' class='text-gray-200'>{{currentTip}}</p>
        </div>
      </transition-group>
      <button class="w-12 h-12 text-3xl font-black text-gray-300 rounded-full opacity-75 mdi mdi-chevron-right focus:outline-none hover:opacity-100"
              href="#" @click="next('tip')"></button>
    </div>
  </div>

  <div id="equipe" style="margin-bottom:50px;margin-top:35px;">
    <h3 style='text-align:center;color: #008000' class='py-2 font-sans text-4xl ' > Notre Equipe </h3>
    <center>
      <hr style="width:20%;margin-bottom:30px;"></hr>
    </center>
    <div class='block' style='justify-content:space-around;flex-wrap:wrap;'>

      <div class="w-full px-2 py-8 md:px-16">
        <p class="text-3xl font-bold text-center">Unik Juice</p>
        <div class="mt-8 md:flex">
          <div class="w-full px-4 lg:w-1/3 contact-card">
            <div class="w-full py-4 rounded-lg shadow-lg">
              <div class="w-32 h-32 mx-auto overflow-hidden rounded-full photo"></div>
              <p class="mt-2 font-bold text-center">Clémence Noutcha</p>
              <p class="mt-2 font-bold text-center text-gray-500"><small>Promotrice du Projet</small></p>
              <p class="mt-2 text-sm text-center text-gray-600">
                +237 694842185
              </p>
              <p class="mt-1 text-sm text-center text-gray-600">
                Cameroon, Yaoundé
              </p>
              <div class="flex justify-center justify-around px-4 mt-4">
                <a href="#" class="flex items-center justify-center w-8 h-8 overflow-hidden text-2xl text-white bg-blue-800 rounded-full mdi mdi-facebook" targer="blank"></a>
                <a href="#" class="flex items-center justify-center w-8 h-8 overflow-hidden text-2xl text-white bg-blue-500 rounded-full mdi mdi-telegram" targer="blank"></a>
                <a href="#" class="flex items-center justify-center w-8 h-8 overflow-hidden text-2xl text-white bg-black rounded-full mdi mdi-git" targer="blank"></a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/3 contact-card">
            <div class="w-full py-4 rounded-lg shadow-lg">
              <div class="w-32 h-32 mx-auto overflow-hidden rounded-full photo"></div>
              <p class="mt-2 font-bold text-center">Hiro Hamada</p>
              <p class="mt-2 font-bold text-center text-gray-500"><small>Web Master</small></p>
              <p class="mt-2 text-sm text-center text-gray-600">
                +237 694842185
              </p>
              <p class="mt-1 text-sm text-center text-gray-600">
                Cameroon, Yaoundé
              </p>
              <div class="flex justify-center justify-around px-4 mt-4">
                <a href="#" class="flex items-center justify-center w-8 h-8 overflow-hidden text-2xl text-white bg-blue-800 rounded-full mdi mdi-facebook" targer="blank"></a>
                <a href="#" class="flex items-center justify-center w-8 h-8 overflow-hidden text-2xl text-white bg-blue-500 rounded-full mdi mdi-telegram" targer="blank"></a>
                <a href="#" class="flex items-center justify-center w-8 h-8 overflow-hidden text-2xl text-white bg-black rounded-full mdi mdi-git" targer="blank"></a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/3 contact-card">
            <div class="w-full py-4 rounded-lg shadow-lg">
              <div class="w-32 h-32 mx-auto overflow-hidden rounded-full photo"></div>
              <p class="mt-2 font-bold text-center">Aurelie Nguejang</p>
              <p class="mt-2 font-bold text-center text-gray-500"><small>Communicatrice</small></p>
              <p class="mt-2 text-sm text-center text-gray-600">
                +237 694842185
              </p>
              <p class="mt-1 text-sm text-center text-gray-600">
                Cameroon, Yaoundé
              </p>
              <div class="flex justify-center justify-around px-4 mt-4">
                <a href="#" class="flex items-center justify-center w-8 h-8 overflow-hidden text-2xl text-white bg-blue-800 rounded-full mdi mdi-facebook" targer="blank"></a>
                <a href="#" class="flex items-center justify-center w-8 h-8 overflow-hidden text-2xl text-white bg-blue-500 rounded-full mdi mdi-telegram" targer="blank"></a>
                <a href="#" class="flex items-center justify-center w-8 h-8 overflow-hidden text-2xl text-white bg-black rounded-full mdi mdi-git" targer="blank"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='px-2 py-2 md:px-16'>
      <p class="font-sans text-3xl text-center" style="color: #008000">NOS CLIENTS</p>
      <div class="flex items-center justify-between">
        <button class="w-12 h-12 text-3xl font-black text-gray-600 rounded-full opacity-75 mdi mdi-chevron-left focus:outline-none hover:opacity-100"
                href="#" @click="prev"></button>
        <transition-group name="fade" tag="div" class="flex-grow h-64">
          <div v-for="i in [currentIndex]" :key="i"
               class='flex flex-col justify-center w-full h-full text-center text-gray-700'>
            <p class='text-3xl italic font-bold juice'>
              {{currentImg.review}}
            </p>
            <p class='mt-4 text-sm'>{{currentImg.user}}</p>
          </div>
        </transition-group>
        <button class="w-12 h-12 text-3xl font-black text-gray-600 rounded-full opacity-75 mdi mdi-chevron-right focus:outline-none hover:opacity-100"
                href="#" @click="next"></button>
      </div>
    </div>


    <!-- Numbers Section -->
    <div id='numbers' style="min-height:300px;border-top:1px solid #dedede;margi-bottom:20px;">
      <h3 style='text-align:center;' class='py-2 font-sans text-4xl text-black-600'> Contactez Nous </h3>
      <center>
        <hr style="width:20%;margin-bottom:30px;"></hr>
      </center>
      <div style='height:100px;' class='flex justify-around'>
        <div>
          <div class='flex my-3'>
            <span class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-map-marker "></span>
            <span style='margin-left:10px;font-size:12px;'> Yaoundé, CMR </span>
          </div>
          <div class='flex my-3'>
            <span class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-phone "></span>
            <span style='margin-left:10px;font-size:12px;'> +237 699 690 829 </span>
          </div>
          <div class='flex my-3'>
            <span class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-phone "></span>
            <span style='margin-left:10px;font-size:12px;'> +237 652 724 829 </span>
          </div>
        </div>
        <div>
          <div class='flex my-3'>
            <span class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-facebook "></span>
            <span style='margin-left:10px;font-size:12px;'> unikjuice </span>
          </div>
          <div class='flex my-3'>
            <span class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-google "></span>
            <span style='margin-left:10px;font-size:12px;'> unikjuice@gmail.com </span>
          </div>
          <div class='flex my-3'>
            <span class="flex items-center justify-center w-6 h-6 ml-4 text-white rounded-full color-1 mdi mdi-twitter "></span>
            <span style='margin-left:10px;font-size:12px;'> unikjuiz </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Numbers Section -->
    <center>Copyright <a href='https://nts.yaknema.com' target="_blank" style='color:#fac94d;'>No Time to Sleep</a></center>
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
    /*background-image: url('/unik/images/jus7.jpg');*/
    background-image: url('https://source.unsplash.com/1280x720/?green?fruit');
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

  .color-1{
    background-color: #32CD32;
  }

  .color-2{
    background-color: #008000;
  }
</style>
