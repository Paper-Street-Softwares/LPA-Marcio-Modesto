// import React from 'react'
// import SectionArea from '../sectionElements/SectionArea'
// import SectionWrapper from '../sectionElements/SectionWrapper'
// import content from '../../content/content'
// import { Instagram, ArrowRight, Facebook, Linkedin } from 'lucide-react'

// function SocialMediaTemplate() {
//   return (
//     <SectionArea>
//       <SectionWrapper>
//         <section className=" bg-white">
//           <div className="container mx-auto">
//             <div className="text-center max-w-2xl mx-auto mb-16">
//               <span className="text-primaryLight font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
//                 {content.texts.about.aboutSocial.miniTag}
//               </span>
//               <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground mb-4">
//                 {content.texts.about.aboutSocial.title}
//               </h2>
//               <p className="text-mutedForeground font-secondFont font-light">
//                 {content.texts.about.aboutSocial.subtitle}
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="flex justify-center">
//                 <div className="relative max-w-md w-full">
//                   <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 to-orange-400 rounded-[2.5rem] opacity-20 blur-2xl" />
//                   <img
//                     src={content.texts.about.aboutSocial.img.img}
//                     alt={content.texts.about.aboutSocial.img.alt}
//                     className="relative rounded-[2rem] shadow-2xl border-4 border-white"
//                     width={448}
//                     height={618}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-8">
//                 <div className="flex flex-col gap-6">
//                   {content.texts.links.instagram?.trim() && (
//                     <a
//                       href={content.texts.links.instagram}
//                       target="_blank"
//                       aria-label="Link para Instagram"
//                       rel="noopener noreferrer"
//                       className="group flex items-center gap-6 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-white"
//                     >
//                       <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white flex items-center justify-center shrink-0">
//                         <Instagram className="w-7 h-7" />
//                       </div>
//                       <div>
//                         <h1 className="font-bold font-mainFont text-lg text-textPadrao">
//                           Instagram
//                         </h1>
//                         <p className="text-mutedForeground font-secondFont font-light text-sm">
//                           Dicas diárias e bastidores
//                         </p>
//                       </div>
//                       <ArrowRight className="ml-auto w-5 h-5 text-mutedForeground group-hover:text-primaryLight transition-colors" />
//                     </a>
//                   )}

//                   {/* {content.texts.links.facebook?.trim() && (
//                     <a
//                       href={content.texts.links.facebook}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group flex items-center gap-6 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-white"
//                     >
//                       <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
//                         <Facebook className="w-7 h-7" />
//                       </div>

//                       <div>
//                         <h1 className="font-bold font-mainFont text-lg">
//                           Facebook
//                         </h1>
//                         <p className="text-mutedForeground font-secondFont font-light text-sm">
//                           Notícias e artigos completos
//                         </p>
//                       </div>

//                       <ArrowRight className="ml-auto w-5 h-5 text-mutedForeground group-hover:text-primaryLight transition-colors" />
//                     </a>
//                   )} */}

//                   {/* {content.texts.links.linkedin?.trim() && (
//                     <a
//                       href={content.texts.links.linkedin}
//                       target="_blank"
//                       className="group flex items-center gap-6 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-white"
//                     >
//                       <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
//                         <Linkedin className="w-7 h-7" />
//                       </div>
//                       <div>
//                         <h1 className="font-bold font-mainFont text-lg">
//                           LinkedIn
//                         </h1>
//                         <p className="text-mutedForeground font-secondFont font-light text-sm">
//                           Conteúdo corporativo
//                         </p>
//                       </div>
//                       <ArrowRight className="ml-auto w-5 h-5 text-mutedForeground group-hover:text-primaryLight transition-colors" />
//                     </a>
//                   )} */}
//                   {content.texts.links.tiktok?.trim() && (
//                     <a
//                       href={content.texts.links.tiktok}
//                       target="_blank"
//                       rel="nopener noreferrer"
//                       aria-label="Link para o TikTok"
//                       className="group flex items-center gap-6 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-white"
//                     >
//                       <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="28"
//                           height="28"
//                           viewBox="0 0 30 30"
//                           fill="currentColor"
//                         >
//                           <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path>
//                         </svg>
//                       </div>
//                       <div>
//                         <h1 className="font-bold font-mainFont text-lg text-textPadrao">
//                           TikTok
//                         </h1>
//                         <p className="text-mutedForeground font-secondFont font-light text-sm">
//                           Conteúdo corporativo
//                         </p>
//                       </div>
//                       <ArrowRight className="ml-auto w-5 h-5 text-mutedForeground group-hover:text-primaryLight transition-colors" />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </SectionWrapper>
//     </SectionArea>
//   )
// }

// export default SocialMediaTemplate
