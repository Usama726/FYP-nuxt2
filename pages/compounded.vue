
<template>
  <div>
    <navbar />
    <top-svg />
    <top-header>Upload Your Compounded <span class="text-red-800 ">Prescription</span> Here</top-header>
    <div class="container mx-auto mt-48 px-16">
      <div
        class=" flex flex-col lg:flex-row gap-5 items-center justify-around border-2 border-blue-100 shadow-lg p-6 rounded-lg">
        <div class="flex flex-col items-center">
          <img class="ui image img-responsive mb-10" src="https://static-media.dawaai.pk/img/prescr-rx.png"
            alt="Prescription rx icon" width="70px">
          <p class="text-center">Upload a valid prescription</p>
        </div>
        <div class="px-24 py-[1px] bg-blue-300"></div>
        <div class="flex flex-col items-center">
          <img class="ui image img-responsive mb-10" src="https://static-media.dawaai.pk/img/prescr-phone.png"
            alt="Prescription phone icon" width="70px">
          <p class="text-center">Receive a confirmation call</p>
        </div>
        <div class="px-24 py-[1px] bg-blue-300"></div>
        <div class="flex flex-col items-center">
          <img class="ui image img-responsive mb-10" src="https://static-media.dawaai.pk/img/prescr-box.png"
            alt="Prescription box icon" width="70px">
          <p class="text-center">Get medicines at your doorstep</p>
        </div>
      </div>
    </div>
    <div class=" pt-16 flex justify-center ">
      <img class=" mt-6 w-48" src="~/assets/images/prescription-upload-image.avif">
    </div>
    <div class="container mx-auto p-16 ">
      <div class=" container mx-auto border border-blue-100 shadow-lg mb-28 px-4 py-8 ">
        <form>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <div class="mb-8">
            <label class="block mb-2 text-sm font-bold text-gray-700">
              <span class="text-red-500">&nbsp;*</span>
              Full Name
            </label>
            <div class="mt-1 rounded-md shadow-sm">

              <input type="text" placeholder="Enter Your Full Name" required
                class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-2 text-sm font-bold text-gray-700">
              <span class="text-red-500">&nbsp;*</span>
              Email Address
            </label>
            <div class="mt-1 rounded-md shadow-sm">

              <input type="email" placeholder="Enter Your Email" required
                class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
            </div>
          </div>
        </div>
          <div class="mb-8">
            <label class="block mb-2 text-sm font-bold text-gray-700">
              <span class="text-red-500">&nbsp;*</span>
              Phone Number
            </label>
            <div class="mt-1 rounded-md shadow-sm">

              <input type="tel" placeholder="Enter Your Mobile Number" required
                class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-2 text-sm font-bold text-gray-700">
              <span class="text-red-500">&nbsp;*</span>
              Message
            </label>
            <div class="mt-1 rounded-md shadow-sm">

              <textarea type="text" placeholder="Enter Your Message" required
                class="block w-full h-24 px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600"></textarea>
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-2 text-sm font-bold text-gray-700">
              <span class="text-red-500">&nbsp;*</span>
              Message
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input type="file" @change="previewImage" accept="image/*">
            </div>
          </div>

          <button type="button" data-te-ripple-init data-te-ripple-color="light"
            class="block rounded border border-blue-500 px-6 pt-2.5 pb-2 text-md font-bold uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white ">
            Send
          </button>
        </form>

        <!-- <div>
          <p>Progress: {{ uploadValue.toFixed() + "%" }}
            <progress id="progress" :value="uploadValue" max="100"></progress>
          </p>
        </div>
        <div v-if="imageData != null">
          <img class="preview" :src="picture">
          <br>
          <div v-if="picture = null">
            <button @click="onPreview">Preview</button>
          </div>
          <div v-else>
            <button @click="onUpload">Upload</button>
          </div>
          <button @click="onCancel">Cancel</button>
        </div>-->
      </div>
    </div>
    <Thefooter />
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      imageUrl: '',
    }
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onPreview() {
      this.picture = null;
      const storageRef = this.$fire.storage.ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, error => { console.log(error.message) },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
          });
        }
      );
    },
    onCancel() {
      this.picture = null;
      this.uploadValue = 0;
      this.imageData = null

    },
    onUpload() {
      this.picture = null;
      this.uploadValue = 0;
      this.imageData = null

    }

  }
}
</script>

<style scoped>
.center {
  text-align: center;
}

img.preview {
  width: 200px;
  margin: 0 auto;
}
</style>


<!-- <template>
  <div>
    <div>
      <input type="file" ref="fileInput">
      <button @click="upload">Upload</button>
    </div>
  
  </div>
</template>

<script>

export default {

  data() {
    return {
user:'',
    }
  },
  methods: {
    async upload() {
      this.user=this.$fire.auth.currentUser
    if (this.user) {
      const file = this.$refs.fileInput.files[0]
      const storageRef = this.$fire.storage.ref()
      const imageRef = storageRef.child(`users/${this.user.uid}/${file.name}`)
      const snapshot = imageRef.put(this.imageFile)
      const imageUrl = snapshot.getDownloadURL()
      this.$fire.firestore.collection('users').doc(this.user.uid).collection("image").add(imageUrl)

    }
  }
}
}

</script>

 -->
