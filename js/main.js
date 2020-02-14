new Vue({
  el: '#perfectDev',
  vuetify: new Vuetify(),
  data() {

    return {
      // toolbar links
      toolbarLink: [
        { text: 'Home', href: '#appino' },
        { text: 'About Us', href: '#about' },
        { text: 'Features', href: '#spec-features' },
        { text: 'Screenshots', href: '#screenshots' }
      ],
      // Navigation Drawer
      drawer: null,

      // Social Icons
      socialIcons: [
        { icon: 'mdi-twitter' },
        { icon: 'mdi-facebook' },
        { icon: 'mdi-instagram' },
        { icon: 'mdi-skype' }
      ],

      // Showcase
      appBarLinks: [
        { text: 'Home', href: '#perfectDev' },
        { text: 'Team', href: '#team' },
        { text: 'Skills', href: '#skills' }
      ],
      subLinks: [
        { text: 'What We Offer', href: '#features' },
        { text: 'About Us', href: '#about' },
        { text: 'Skills', href: '#skills' },
        { text: 'Services', href: '#services' },
        { text: 'Projects', href: '#projects' },
        { text: 'Testimonials', href: '#feedback' },
        { text: 'Team', href: '#team' },
        { text: 'FAQ', href: '#faqs' },
        { text: 'Partners', href: '#partners' },
        { text: 'Contact Us', href: '#contact' }
      ],

      // Services
      featureBoxes: [
        {
          img: 'img/features-icon-1.png',
          title: 'Branding',
          text:
            'We provide everything your site needs to perform at it’s highest capabilities on the major search engines.'
        },
        {
          img: 'img/features-icon-2.png',
          title: 'Marketing',
          text:
            'We do collateral design, interactive design, hoarding, signage, presentation centres, and more.'
        },
        {
          img: 'img/features-icon-3.png',
          title: 'Presentation',
          text:
            'Rich experience plus unlimited imagination create our successful service discovered by clients.'
        }
      ],

      // About, Dialog
      aboutDialog: false,
      aboutName: '',
      aboutEmail: '',
      validAboutForm: true,

      // Skills
      skills: [
        {
          col: [
            { title: 'Communication', percent: '80' },
            { title: 'Teamwork', percent: '55' },
            { title: 'Self-Motivation', percent: '86' }
          ]
        },
        {
          col: [
            { title: 'HTML & CSS', percent: '78' },
            { title: 'Javascript', percent: '51' },
            { title: 'Web Design', percent: '69' }
          ]
        }
      ],

      // Our Services
      serviceBoxes: [
        {
          img: 'img/services-icon-2.png',
          title: 'Web Development',
          text:
            'Innovative & creative website to spread your message and to express yourself.'
        },
        {
          img: 'img/services-icon-1.png',
          title: 'Mobile Development',
          text:
            'The best astonishing mobile apps with high quality users deserv.'
        },
        {
          img: 'img/services-icon-3.png',
          title: 'UI/UX Design',
          text:
            'We provide the best UI/UX Design by following the latest trends of the market.'
        }
      ],

      // Projects
      projectDialog: false,

      // Feedback
      feedbackSlides: [
        {
          img: 'img/feedback-person-1.jpg',
          text:
            'Thank you for such an affordable and multipurpose template! It’s easy to configure and use, and what’s more important it looks great. It’s just what I wanted for my website. Keep doing a great job, I’m sure to become a returning customer!',
          author: 'Lora Smith',
          job: 'Product Manager'
        },
        {
          img: 'img/feedback-person-2.jpg',
          text:
            'Since I’m not a real pro in web design, I love to use these ready-made and beautifully looking templates. They are available at very affordable prices and they save you a lot of time, and deliver from a lot of sweat and tears!',
          author: 'Sarah Anderson',
          job: 'Designer'
        },
        {
          img: 'img/feedback-person-1.jpg',
          text:
            'You are one of the greatest web design & development specialists I have ever worked with! Thanks to you, my store is now fully responsive and a lot more stable! Great organization!! Your prompt answer became a pleasant surprise for me. ',
          author: 'Julia Yung',
          job: 'Marketing Expert'
        }
      ],

      // Our Team
      teamBoxes: [
        { img: 'img/team-1.jpg', title: 'Sarah Anderson', job: 'Product Manager' },
        { img: 'img/team-3.jpg', title: 'Robi Jackson', job: 'CEO' },
        { img: 'img/team-2.jpg', title: 'Lora Mill', job: 'Lead Designer' },
      ],

      // FAQs
      fpanel: 0,
      fqaPanels: [
        { title: 'What are the advantages of purchasing a website template?', text: 'The major advantage is price: You get a high quality design for just $20-$70. You don’t have to hire a web designer or web design studio. Second advantage is time frame: It usually takes 5-15 days for a good designer to produce a web page of such quality.' },
        { title: 'Do you provide any scripts with your templates or could you do some custom programming?', text: 'Our templates do not include any additional scripts. Newsletter subscriptions, search fields, forums, image galleries (in HTML versions of Flash products) are inactive. Basic scripts can be easily added at zemez.io If you are not sure that the element you’re interested in is active please contact our Support Chat for clarification.' },
        { title: 'In what formats are your templates available?', text: 'Website templates are available in Photoshop and HTML formats. Fonts are included with Photoshop file. In most templates HTML is compatible with Adobe® Dreamweaver® and Microsoft Frontpage®.' },
      ],

      // Our Partners
      partnerBoxes: [
        { img: 'img/partners-1.png' },
        { img: 'img/partners-2.png' },
        { img: 'img/partners-3.png' },
        { img: 'img/partners-4.png' }
      ],

      // Call Panel
      showPanel: false,
      callPanel: false,

      callPanelIcons: [
        { icon: 'mdi-telegram', color: "primary" },
        { icon: 'mdi-whatsapp', color: "success" },
        { icon: 'mdi-gmail', color: "red" },
        { icon: 'mdi-facebook-messenger', color: "blue darken-1" },
      ],

      // Chat Panel
      hideChatPanel: false,
      defaultLang: { text: 'UZ' },
      langs: [
        { text: 'UZ', avatar: 'img/UZB.jpg' },
        { text: 'US', avatar: 'img/US.png' },
        { text: 'GB', avatar: 'img/GB.png' },
        { text: 'AU', avatar: 'img/AU.png' },
        { text: 'BR', avatar: 'img/BR.png' },
      ],

      // Tooltip
      showTooltip: false,

      // Snackbar
      chatSnackbar: false,
      timeout: 3000,

      // Loader
      chatLoading: false,
      chatLoader: null,

      // Chat Panel Form
      validChat1: false,
      validChat2: false,
      validChat3: false,
      lazy: false,
      // 1
      chatName1: '',
      chatEmail1: '',
      // 2
      chatOrder2: '',

      // 3
      chatName3: '',
      chatEmail3: '',

      chatNameRules: [
        v => !!v || 'Name is required',
      ],
      chatEmailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      chatOrderRules: [
        v => !!v || 'Field is required',
      ],

      // Preloader
      showLoader: false
    }
  },
  methods: {
    // About Dialog
    openAboutDialog() {
      this.aboutDialog = true
    },

    // Project Dialog
    openProjectDialog() {
      this.projectDialog = true
    },

    // About Dialog
    validateAboutDialog() {
      if (this.$refs.aboutForm.validate()) {
        this.$refs.aboutForm.reset()
      }
    },

    // Hide Chat Panel
    hidePanel() {
      this.hideChatPanel = false
    },
    // Chat Form
    validate1() {
      if (this.$refs.chatForm1.validate()) {
        this.$refs.chatForm1.reset()
      }
    },
    validate2() {
      if (this.$refs.chatForm2.validate()) {
        this.$refs.chatForm2.reset()
      }
    },
    validate3() {
      if (this.$refs.chatForm3.validate()) {
        this.$refs.chatForm3.reset()
      }
    },

    // Back To Top
    onScroll(e) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.backToTop').style.display = "block"
      } else {
        document.querySelector('.backToTop').style.display = "none"
      }
    },
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  },

  watch: {
    chatLoader() {
      const l = this.chatLoader
      this[l] = !this[l]

      setTimeout(() => ((this[l] = false)), 4000);

      this.chatLoader = null;
    }
  },

  beforeCreate() {
    this.showLoader = true
  },
  mounted() {
    this.showLoader = false
  }
});
