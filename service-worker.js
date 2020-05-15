/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "669709308f21d98778ef95d4bc9436eb"
  },
  {
    "url": "assets/css/0.styles.d3647313.css",
    "revision": "71f8c74baf04b5fc54db0bd965e74a91"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3a6e6e59.js",
    "revision": "1677fcdbbc3cf172e3553a4b77912968"
  },
  {
    "url": "assets/js/11.bc48edca.js",
    "revision": "ad0f2286c3bf300fb99c2a55ce0e4993"
  },
  {
    "url": "assets/js/12.458a2fd6.js",
    "revision": "68382590d0a183b18b0af35a983c395f"
  },
  {
    "url": "assets/js/13.f88da073.js",
    "revision": "7bac4e479e39301a9df0106634874f59"
  },
  {
    "url": "assets/js/14.ac56c36a.js",
    "revision": "538fddfcc6f0ca0de08b2152f9e725e0"
  },
  {
    "url": "assets/js/15.1b00a52b.js",
    "revision": "84fdd843ec92c4663fa23599436c5cd1"
  },
  {
    "url": "assets/js/16.c062a669.js",
    "revision": "40369b1867923d1b2f6a819cd8c808ec"
  },
  {
    "url": "assets/js/17.1ebf68ec.js",
    "revision": "bf7dd34cfd7b9f5b546613b63ea2dd1f"
  },
  {
    "url": "assets/js/18.494c43a4.js",
    "revision": "b62991f3a4189d41a11c3838962ab5a2"
  },
  {
    "url": "assets/js/19.a7c56588.js",
    "revision": "2ec24768a65caa63cba8f1a366bcdb4e"
  },
  {
    "url": "assets/js/20.66105bcb.js",
    "revision": "d2d2357f0441381a500a79d7840dfeb9"
  },
  {
    "url": "assets/js/21.bcaa8de5.js",
    "revision": "faafa25592f58d6d2594b4d90a09c192"
  },
  {
    "url": "assets/js/22.06403247.js",
    "revision": "aaeeaf4b922b72f2bc4bea8915d4b380"
  },
  {
    "url": "assets/js/23.e5f8a9dd.js",
    "revision": "3fa72d7c53c96a6548cb5cb86981ca05"
  },
  {
    "url": "assets/js/24.37509bcb.js",
    "revision": "55eef187c5182f5801c9f9ea7e982239"
  },
  {
    "url": "assets/js/25.a2f2ed97.js",
    "revision": "be44137c4ac352bbe6fd8a71216e4cda"
  },
  {
    "url": "assets/js/26.aba632c0.js",
    "revision": "354f577fa54d86832250620a592b5bb4"
  },
  {
    "url": "assets/js/27.a7e87f90.js",
    "revision": "39997e6c87f98560ab27e7bf1868215f"
  },
  {
    "url": "assets/js/28.1f97e563.js",
    "revision": "3dc41f726323fc7263acb02c75ff9c3b"
  },
  {
    "url": "assets/js/29.298f4275.js",
    "revision": "2d0883d34ae1beac0c9d4f3a5da39dac"
  },
  {
    "url": "assets/js/30.33d95527.js",
    "revision": "04813edbfa4d394225d7e76858eba356"
  },
  {
    "url": "assets/js/31.25dc5e0e.js",
    "revision": "9d837f637e2f85f97cd4634fe60a7354"
  },
  {
    "url": "assets/js/32.0318fa21.js",
    "revision": "5da0af6e6405a1033215dd116e8d1889"
  },
  {
    "url": "assets/js/33.50572b14.js",
    "revision": "8688e65f553d6621c8a06ebc719ecaf7"
  },
  {
    "url": "assets/js/34.b780c6a1.js",
    "revision": "07d1e5a9b3f4f7c9c5d9a35a91758903"
  },
  {
    "url": "assets/js/35.4e3811f1.js",
    "revision": "3d9931b9c39291a9ac612ccf5a1182f5"
  },
  {
    "url": "assets/js/36.f34c8bae.js",
    "revision": "bd3c95c29977dba7d442412e083e5269"
  },
  {
    "url": "assets/js/37.013700c9.js",
    "revision": "b1bb99007b51a72f5ece957130b1bffc"
  },
  {
    "url": "assets/js/38.e3592176.js",
    "revision": "699e2588eef2ca73d0c188fcc7b59e47"
  },
  {
    "url": "assets/js/39.9af8defc.js",
    "revision": "83f3e75a9482d222d3cb8f2a8c6f75d5"
  },
  {
    "url": "assets/js/4.e4c65085.js",
    "revision": "8c3b30cf3f0061bf879fe6a7dedeb003"
  },
  {
    "url": "assets/js/40.2962687e.js",
    "revision": "872e74e657da85cc8f949156965a3767"
  },
  {
    "url": "assets/js/41.132b6356.js",
    "revision": "3f80778d802d5191a53f9a8c0507959c"
  },
  {
    "url": "assets/js/42.c6464c7c.js",
    "revision": "8bb84d6216fa6de26e9e72322e69355a"
  },
  {
    "url": "assets/js/43.63b1f956.js",
    "revision": "f238ff40f2909e28a790b872e3a5271c"
  },
  {
    "url": "assets/js/44.3be4bf67.js",
    "revision": "e054fec68fee97a7c3d4b0c9508180ec"
  },
  {
    "url": "assets/js/45.86fef4cb.js",
    "revision": "2ede9cd27552f2751d0cdba3337a1998"
  },
  {
    "url": "assets/js/46.adf59de1.js",
    "revision": "a61ebc037517c8daafde2e000b82cac4"
  },
  {
    "url": "assets/js/47.a19ad184.js",
    "revision": "f47d1847f4b9146f71c74b55f9c4279d"
  },
  {
    "url": "assets/js/48.b54e1fdf.js",
    "revision": "e59562e18fb1c57fdec478167f8b841c"
  },
  {
    "url": "assets/js/49.fac23579.js",
    "revision": "0bdc957f2358879457126e9af6594995"
  },
  {
    "url": "assets/js/5.64d38297.js",
    "revision": "dc4ca790d008d52bc9dfc1954ae0e704"
  },
  {
    "url": "assets/js/50.5d38f0bd.js",
    "revision": "820bfcada6c4cf58a02dabf3ffecc3e0"
  },
  {
    "url": "assets/js/51.77873823.js",
    "revision": "eb929dcfe84effbdf8bb9bcb127e762c"
  },
  {
    "url": "assets/js/52.3b6adeb7.js",
    "revision": "4c73068159249bbb1e204f8981d4adb2"
  },
  {
    "url": "assets/js/53.b0416472.js",
    "revision": "909dfbbcd7a1390f205e487bd60980bf"
  },
  {
    "url": "assets/js/54.fa194369.js",
    "revision": "8dccd5a1c1b11025ca99607fc1d9599e"
  },
  {
    "url": "assets/js/55.d7400a17.js",
    "revision": "254bd5ab861b3def2390676c19af4b79"
  },
  {
    "url": "assets/js/56.c3ead732.js",
    "revision": "cb73ee3495d37606a7025d3ea4e4f5e9"
  },
  {
    "url": "assets/js/57.4bc0e751.js",
    "revision": "01a2d78863d7af8f5ccfce73ddd0bda7"
  },
  {
    "url": "assets/js/58.214d811a.js",
    "revision": "cbba5c0bc7a46f025a0c531333c2eeee"
  },
  {
    "url": "assets/js/59.62cc4a45.js",
    "revision": "0855afa80e964d1089b2311f638f187c"
  },
  {
    "url": "assets/js/6.9d5895c7.js",
    "revision": "2637723cb57c433dbb33a5be4a60f79b"
  },
  {
    "url": "assets/js/60.649604cc.js",
    "revision": "3c365691087ce441437d5140f7f336a3"
  },
  {
    "url": "assets/js/61.adece866.js",
    "revision": "30b26fee9565db70ca29646c3976249d"
  },
  {
    "url": "assets/js/62.a72a2b8b.js",
    "revision": "bc11abcc4046d126f8b1b72a9bb4c9f9"
  },
  {
    "url": "assets/js/63.1c2edd62.js",
    "revision": "4ba923f0abcaecf032167c9ebaeb83e9"
  },
  {
    "url": "assets/js/64.a0cc9581.js",
    "revision": "e35b59aa4b3da9b833694c19674eda71"
  },
  {
    "url": "assets/js/65.caf13ccf.js",
    "revision": "53714cf8d0faa7b7ee6525404942adc6"
  },
  {
    "url": "assets/js/66.4e80b994.js",
    "revision": "1417648b30f6a1f0b27ce8de9bca9336"
  },
  {
    "url": "assets/js/67.f9c7b082.js",
    "revision": "939662e38d5515c2b51ca3a148cb02e9"
  },
  {
    "url": "assets/js/68.4f00ccd5.js",
    "revision": "e16d4060d4b3245896a82798e626e347"
  },
  {
    "url": "assets/js/69.a5069420.js",
    "revision": "4c3580f539623d0d9b5f75e88d6b36d9"
  },
  {
    "url": "assets/js/7.5827228f.js",
    "revision": "7d9bff7b39983b159d0d1f6d25c37248"
  },
  {
    "url": "assets/js/8.c88d4e8e.js",
    "revision": "4781c1b5706a6eb2efe0775d14aee067"
  },
  {
    "url": "assets/js/9.2a55e613.js",
    "revision": "6551adb76f6dcc1c890fcb28df25f4c5"
  },
  {
    "url": "assets/js/app.1c7d392b.js",
    "revision": "d69a94c61b913892637c101b71d2b607"
  },
  {
    "url": "assets/js/vendors~flowchart.6bc1f1d2.js",
    "revision": "46ecfaa5c1ca7a01d1216d8eb8df76da"
  },
  {
    "url": "assets/js/vendors~notification.40ab5d7d.js",
    "revision": "1684c1e4034d1bb275e905d573abd729"
  },
  {
    "url": "cache/CacheInterview.html",
    "revision": "102c545ebdb6d55ba8c9853e6e826800"
  },
  {
    "url": "cache/Caffeine.html",
    "revision": "5c1db24589e3041670daf7a5cdc4bc6d"
  },
  {
    "url": "cache/Ehcache.html",
    "revision": "8aaac5d48ab4bbc6665f3c5642ff1608"
  },
  {
    "url": "cache/index.html",
    "revision": "fa1caf211ad34494f64f7385bb2d5ea3"
  },
  {
    "url": "framework/index.html",
    "revision": "25aa1867374440a9da1af01e9bc2bd17"
  },
  {
    "url": "framework/mybatis.html",
    "revision": "e0f98504af6c6d06884c6f7434c75e1e"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "b265b3e3539ddea5a6beb2035e4b561b"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "376dc02aa3d5675cf52df9e5efefb7ba"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "9d72b41ed630e46834c2c3b265ebc443"
  },
  {
    "url": "lib/index.html",
    "revision": "c104b3af35cf2a0faf6db825590fff9e"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "8e4feaa6d129e473beff2ffcdc865b1b"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "0a6a50c2644f858055abc66dde5fad1e"
  },
  {
    "url": "lib/javamail.html",
    "revision": "b06eced65ecc0b36f8f82f9451762b5f"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "c328f6ae399c6e6786cd250d8f288de1"
  },
  {
    "url": "lib/reflections.html",
    "revision": "9ca1695e3c0764bfd063395908f19258"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "5dd5146fe2cc1e367e707456f7a2efea"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "d5a12155f48dccd02aa959dd0b6d467a"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "cc95fef2120a9985dfa133466c006545"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "dffaeb3b5e8fd0579315f7adea7078bf"
  },
  {
    "url": "lib/template/index.html",
    "revision": "2c4162559cddb7ef63df065a7b4b5af0"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "7b5f4e650a3e4ba66f12821b923aa2f7"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "88c6046cbcd0d8319e9fd99e103b9762"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "9883915d1af5d5c3d265d9ad62ec5672"
  },
  {
    "url": "lib/zxing.html",
    "revision": "e1f78fe56e998dc08c434bb0487668f5"
  },
  {
    "url": "mq/activemq.html",
    "revision": "e5c467c8c7970d86db2e188f1ebea164"
  },
  {
    "url": "mq/index.html",
    "revision": "ecf0b9cbcb7e7d4ce08f981fc6ba1fe2"
  },
  {
    "url": "mq/kafka/index.html",
    "revision": "d67046566045f128fb4b55b483ab75b2"
  },
  {
    "url": "mq/kafka/kafka-advance.html",
    "revision": "60f39d742454f4478fb2085d0243889d"
  },
  {
    "url": "mq/kafka/kafka-basic.html",
    "revision": "77b2810cf88aa06aaf22716fa2caf801"
  },
  {
    "url": "mq/kafka/kafka-ops.html",
    "revision": "01baddc033a191b5f0ff85eb96ca7b7f"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "a887521d83d20215024dea0d373e14e4"
  },
  {
    "url": "search/elastic-beats-ops.html",
    "revision": "0ff62bdaf0b328e479bfcbdf6072112b"
  },
  {
    "url": "search/elastic-beats.html",
    "revision": "4472dcca4e030378e51e3188e9138877"
  },
  {
    "url": "search/elastic-kibana-ops.html",
    "revision": "17a83917f611333b1ce2c30d8aba62c5"
  },
  {
    "url": "search/elastic-kibana.html",
    "revision": "a12b10d37ac2d56265a1bd6bf96cabcf"
  },
  {
    "url": "search/elastic-logstash-ops.html",
    "revision": "0bf33acfa59c38fcf15024f93a61f194"
  },
  {
    "url": "search/elastic-logstash.html",
    "revision": "5da96fcffd5378311309dfc16b0db57a"
  },
  {
    "url": "search/elastic-quickstart.html",
    "revision": "64f4f631274a27c8b8f597d4e50446ef"
  },
  {
    "url": "search/elasticsearch/elasticsearch-ops.html",
    "revision": "28a03534277c126b0544ae6ba7c265f4"
  },
  {
    "url": "search/elasticsearch/elasticsearch.html",
    "revision": "3898ec4416cd993d92a0ab99a30c6a8b"
  },
  {
    "url": "search/elasticsearch/index.html",
    "revision": "66b4223067c1dc026da74444a2c0bb26"
  },
  {
    "url": "search/index.html",
    "revision": "d5e0c201544d01b2b9ee3d81223991b9"
  },
  {
    "url": "security/index.html",
    "revision": "321560f1cb491045e6690a9b3aab5880"
  },
  {
    "url": "security/shiro.html",
    "revision": "1830d3b51333349ce6367154433af873"
  },
  {
    "url": "security/spring-security.html",
    "revision": "1a3df7916783f08411c085fc3e3231df"
  },
  {
    "url": "server/index.html",
    "revision": "e5036351fc4aa5208e26e00918ca8b7b"
  },
  {
    "url": "server/jetty.html",
    "revision": "63ba0ec33a5626505f0994adae4b4b1e"
  },
  {
    "url": "server/tomcat.html",
    "revision": "d6e55b14f9b2978de23a8da008730a08"
  },
  {
    "url": "soa/dubbo.html",
    "revision": "86222cc8f6ce274934202e04936aa2a4"
  },
  {
    "url": "soa/index.html",
    "revision": "ccaf54d20615a8776de91a760a990e8f"
  },
  {
    "url": "soa/netty.html",
    "revision": "221fb0b780405fe3535f1c7baaf8c6f7"
  },
  {
    "url": "soa/zookeeper/index.html",
    "revision": "342e237e87160fdb9bfc29189e296a2f"
  },
  {
    "url": "soa/zookeeper/zookeeper-ops.html",
    "revision": "f993828999229325196fbbc07e7f35d8"
  },
  {
    "url": "soa/zookeeper/zookeeper.html",
    "revision": "9f9a0e13a3fc34f784815fb0c8dbc429"
  },
  {
    "url": "storage/index.html",
    "revision": "84226f321e240e188bf60d31b3d05e62"
  },
  {
    "url": "storage/shardingsphere.html",
    "revision": "a51ad3d9cd98424aebd9acdfa3442bc1"
  },
  {
    "url": "test/index.html",
    "revision": "422c049091705af3b1fe49b349b8cb7a"
  },
  {
    "url": "test/jmeter.html",
    "revision": "56b4bed8448e7e871c2566e6d548f272"
  },
  {
    "url": "test/jmh.html",
    "revision": "af62126569191bd89283dfc00adcf8b6"
  },
  {
    "url": "test/junit.html",
    "revision": "739b9f0f29e705738e4972301620ff31"
  },
  {
    "url": "test/mockito.html",
    "revision": "dee8325a0e20a411f0e92b807e21b0fb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
