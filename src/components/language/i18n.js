import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      HOME: 'Home',
      SPECS: 'Specs',
      CASE: 'Case',
      PRODUCTS: 'Products',
      SIGNIN: 'Sign in',
      OVERVIEW: 'Overview',
      OVERVIEWTEXT:
        'Enjoy award-winning Beats sound with wireless listening freedom and a sleek,streamlined design with comfortable padded earphones, delivering first-rate playback.',
      ADDTOBAG: 'Add to Bag',
      SPECSTITLE: 'Specs',
      SPECSTITLE1: 'Connection',
      SPECSTITLE2: 'Battery',
      SPECSCHILDTITLE2: 'Duration 40h',
      SPECSTITLE3: 'Load',
      SPECSCHILDTITLE3: 'Fast charge 4.2-AAC',
      SPECSTITLE4: 'Microphone',
      SPECSCHILDTITLE4: 'Supports Apple Siri and Google',
      CASETITLE: 'Case',
      CASETEXT:
        'With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.',
      CASEMOREINFO: 'More info',
      PRODUCTSTITLE: 'Choose Your Style',
      SIGNINSYSTEM: 'Sign in system',
      USEREMAIL: 'E-mail',
      PASSWORD: 'Password',
      PASSWORDRECOVER: 'Forgot password?',
      LOGIN: 'Log in',
      REGISTER: 'Registration',
      USERNOTFOUND: 'User not fount',
      REQUIREDFILL: 'Required fill',
      REGFIRSTNAME: 'First name',
      REGLASTNAME: 'Last name',
      REGEMAIL: 'E-mail',
      REGPASSWORD: 'Password',
      REGREPETEPASSWORD: 'Repeat password',
      REGTITLE: 'Personal information',
      REG: '',
    },
  },
  ge: {
    translation: {
      HOME: 'მთავარი',
      SPECS: 'მახასიათებლები',
      CASE: 'ქეისი',
      PRODUCTS: 'პროდუქტები',
      SIGNIN: 'შესვლა',
      OVERVIEW: 'მიმოხილვა',
      OVERVIEWTEXT:
        'მიიღე სიამოვნება მუსიკის მოსმენით უსადენო ყურსასმენების საშუალებით. არაჩვეულებრივი დიზაინი რომელიც მოერგება თქვენს ყურს და მაღალი ხარისხის ხმა, არის თქვენი საყვარელი ჰიტების მოსმენის ყველაზე კომფორტული საშუალება.',
      ADDTOBAG: 'კალათაში დამატება',
      SPECSTITLE: 'მახასიათებლები',
      SPECSTITLE1: 'კავშირი',
      SPECSTITLE2: 'ელემენტი',
      SPECSCHILDTITLE2: 'ხანგრძლივობა 40სთ',
      SPECSTITLE3: 'დატენვა',
      SPECSCHILDTITLE3: 'სწრაფი დატენვა 4.2-AAC',
      SPECSTITLE4: 'მიკროფონი',
      SPECSCHILDTITLE4: 'აქვს მხარდაჭერა Apple Siri-ის და Google-ის',
      CASETITLE: 'ქეისი',
      CASETEXT:
        'მარტივად გამოსაყენები და კომფორტული ქეისი, რომლითაც ყურსასმენების შენახვას ყველგან მოახერხებ. უმაღლესი ხარისხის მატერიალი და სადა დიზაინი გახდება თქვენი ყოველდღიურობის ნაწილი.',
      CASEMOREINFO: 'ვრცლად',
      PRODUCTSTITLE: 'აირჩიე სტილი',
      SIGNINSYSTEM: 'სისტემაში შესვლა',
      USEREMAIL: 'ელ-ფოსტა',
      PASSWORD: 'პაროლი',
      PASSWORDRECOVER: 'დაგავიწყდა პაროლი?',
      LOGIN: 'შესვლა',
      REGISTER: 'რეგისტრაცია',
      REQUIREDFILL: 'სავალდებულო ველი',
      REGFIRSTNAME: 'სახელი',
      REGLASTNAME: 'გვარი',
      REGEMAIL: 'ელ-ფოსტა',
      REGPASSWORD: 'პაროლი',
      REGREPETEPASSWORD: 'გაიმეორეთ პაროლი',
      REGTITLE: 'პირადი ინფორმაცია',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: `${localStorage.getItem('lang') || 'ge'}`,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
