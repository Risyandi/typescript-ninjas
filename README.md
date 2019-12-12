# Typescript Ninjas
Typescript Ninjas adalah sebuah repositori yang dikhususkan untuk eksperimen dan latihan menggunakan bahasa typescript. eksperimen dan latihan di repositori ini akan bermanfaat bagi teman-teman yang baru ingin belajar apa itu typescript dan juga bermanfaat juga bagi yang sudah paham tentang bagaimana cara menggunakan typescript itu sendiri.  

## Ayo Mulai
sebelum memulai menggunakan typescript, yang harus kamu ketahui adalah tentang bagaimana cara atau proses kompilasi file typescript menjadi file javascript yang berekstensi `.js`, yang dilakukan pertama adalah  
1. Buatlah terlebih dahulu file typescript.
2. Setelah kamu membuat file typescript, selanjutnya kamu harus mengetikan perintah berikut di terminal :  
`$ tsc hello.ts`  
*catatan: fungsi dari perintah tersebuh adalah kompilasi file tersebut menjadi sebuah file javascript*  

sedangkan jika ingin melakukan build pada file typescript kamu bisa memanggil perintah berikut :
1. `CTRL + SHIFT + B` lalu pilih task `ts:build` dan nanti hasilnya akan seperti yang dilakukan oleh perintah `$ tsc hello.ts` namun hasil kompilasi dari  typescript akan di simpan di folder yang berbeda yang sebelum nya sudah ditentukan diawal yang dilakukan di file *tsconfig.json*.