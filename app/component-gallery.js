// /**
//  * WanderStay Component Gallery
//  * Showcase of all available components with examples
//  */

// 'use client'

// import { Container, SectionHeader } from '@/components/ui/ComponentLibrary'
// import {
//   Button,
//   Badge,
//   Card,
//   Input,
//   Avatar,
//   RatingStars,
//   Tag,
//   Spinner,
//   Alert,
//   StatItem,
//   Divider,
// } from '@/components/ui/ComponentLibrary'

// export default function ComponentGallery() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       {/* Header */}
//       <section className="bg-gradient-to-r from-[#FF6A3D] to-[#00B3A6] text-white py-16 px-6">
//         <Container>
//           <h1 className="text-5xl font-bold mb-4">WanderStay Component Gallery</h1>
//           <p className="text-lg opacity-90">All available UI components with examples and customization options</p>
//         </Container>
//       </section>

//       {/* Button Components */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Button Component" badge="🔘 BUTTONS" centered={true} />
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//             {/* Variants */}
//             <Card>
//               <h3 className="font-bold text-lg mb-4">Button Variants</h3>
//               <div className="space-y-3">
//                 <Button variant="primary">Primary Button</Button>
//                 <Button variant="secondary">Secondary Button</Button>
//                 <Button variant="ghost">Ghost Button</Button>
//                 <Button variant="outline">Outline Button</Button>
//               </div>
//             </Card>

//             {/* Sizes */}
//             <Card>
//               <h3 className="font-bold text-lg mb-4">Button Sizes</h3>
//               <div className="space-y-3">
//                 <Button size="sm">Small Button</Button>
//                 <Button size="md">Medium Button</Button>
//                 <Button size="lg">Large Button</Button>
//               </div>
//             </Card>
//           </div>
//         </Container>
//       </section>

//       <Divider />

//       {/* Badge Components */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Badge Component" badge="🎫 BADGES" centered={true} />
          
//           <Card className="mt-12">
//             <div className="flex flex-wrap gap-4">
//               <Badge variant="default">Default</Badge>
//               <Badge variant="orange">Orange</Badge>
//               <Badge variant="teal">Teal</Badge>
//               <Badge variant="yellow">Yellow</Badge>
//               <Badge variant="success">Success</Badge>
//             </div>
//           </Card>
//         </Container>
//       </section>

//       <Divider />

//       {/* Input Components */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Input Component" badge="⌨️ INPUTS" centered={true} />
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//             <Card>
//               <h3 className="font-bold text-lg mb-4">Light Variant</h3>
//               <Input placeholder="Enter text" variant="light" />
//               <Input type="email" placeholder="Enter email" variant="light" className="mt-4" />
//               <Input type="password" placeholder="Enter password" variant="light" className="mt-4" />
//             </Card>

//             <Card>
//               <h3 className="font-bold text-lg mb-4">Dark Variant</h3>
//               <Input placeholder="Enter text" variant="dark" />
//               <Input type="email" placeholder="Enter email" variant="dark" className="mt-4" />
//               <Input
//                 placeholder="Search..."
//                 variant="dark"
//                 icon={<SearchIcon />}
//                 className="mt-4"
//               />
//             </Card>
//           </div>
//         </Container>
//       </section>

//       <Divider />

//       {/* Avatar Component */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Avatar Component" badge="👤 AVATARS" centered={true} />
          
//           <Card className="mt-12">
//             <div className="flex items-center gap-8 flex-wrap">
//               <div>
//                 <p className="text-sm text-gray-600 mb-2">Small</p>
//                 <Avatar initial="SC" size="sm" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600 mb-2">Medium</p>
//                 <Avatar initial="MJ" size="md" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600 mb-2">Large</p>
//                 <Avatar initial="YT" size="lg" />
//               </div>
//             </div>
//           </Card>
//         </Container>
//       </section>

//       <Divider />

//       {/* Rating Stars */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Rating Stars Component" badge="⭐ RATINGS" centered={true} />
          
//           <Card className="mt-12">
//             <div className="flex items-center gap-8 flex-wrap">
//               {[3, 3.5, 4, 4.5, 5].map((rating) => (
//                 <div key={rating}>
//                   <p className="text-sm text-gray-600 mb-2">{rating} Stars</p>
//                   <RatingStars rating={rating} size="md" />
//                 </div>
//               ))}
//             </div>
//           </Card>
//         </Container>
//       </section>

//       <Divider />

//       {/* Tag Component */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Tag Component" badge="🏷️ TAGS" centered={true} />
          
//           <Card className="mt-12">
//             <div className="flex flex-wrap gap-3">
//               <Tag>#Travel</Tag>
//               <Tag>#Adventure</Tag>
//               <Tag onClose={() => {}}>
//                 #Removable
//               </Tag>
//               <Tag onClose={() => {}}>
//                 #WithClose
//               </Tag>
//             </div>
//           </Card>
//         </Container>
//       </section>

//       <Divider />

//       {/* Spinner Component */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Spinner Component" badge="⟳ SPINNERS" centered={true} />
          
//           <Card className="mt-12">
//             <div className="flex items-center gap-8">
//               <div className="text-center">
//                 <p className="text-sm text-gray-600 mb-4">Small</p>
//                 <Spinner size="sm" />
//               </div>
//               <div className="text-center">
//                 <p className="text-sm text-gray-600 mb-4">Medium</p>
//                 <Spinner size="md" />
//               </div>
//               <div className="text-center">
//                 <p className="text-sm text-gray-600 mb-4">Large</p>
//                 <Spinner size="lg" />
//               </div>
//             </div>
//           </Card>
//         </Container>
//       </section>

//       <Divider />

//       {/* Alert Component */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Alert Component" badge="⚠️ ALERTS" centered={true} />
          
//           <div className="space-y-4 mt-12">
//             <Alert
//               type="info"
//               title="Information"
//               message="This is an informational message"
//             />
//             <Alert
//               type="success"
//               title="Success!"
//               message="Your action was completed successfully"
//             />
//             <Alert
//               type="warning"
//               title="Warning"
//               message="Please review this action before proceeding"
//             />
//             <Alert
//               type="error"
//               title="Error"
//               message="Something went wrong. Please try again."
//             />
//           </div>
//         </Container>
//       </section>

//       <Divider />

//       {/* Stats Component */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Stat Item Component" badge="📊 STATS" centered={true} />
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//             <StatItem stat="50K+" label="Active Travelers" />
//             <StatItem stat="500+" label="Stays Listed" />
//             <StatItem stat="2.5K+" label="Stories Shared" />
//             <StatItem stat="200+" label="Destinations" />
//           </div>
//         </Container>
//       </section>

//       <Divider />

//       {/* Color Palette */}
//       <section className="py-16 px-6">
//         <Container>
//           <SectionHeader title="Color Palette" badge="🎨 COLORS" centered={true} />
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//             {[
//               { name: 'Primary Orange', color: '#FF6A3D' },
//               { name: 'Primary Teal', color: '#00B3A6' },
//               { name: 'Secondary Yellow', color: '#FFC857' },
//               { name: 'Secondary Blue', color: '#2E86AB' },
//               { name: 'Accent Green', color: '#2F5233' },
//               { name: 'Accent Beige', color: '#F2E9D8' },
//               { name: 'Dark Charcoal', color: '#17191F' },
//               { name: 'Muted Slate', color: '#2A2E36' },
//             ].map((item) => (
//               <Card key={item.name} className="text-center">
//                 <div
//                   className="w-full h-32 rounded-lg mb-4"
//                   style={{ backgroundColor: item.color }}
//                 ></div>
//                 <p className="font-semibold text-[#1A1A1A]">{item.name}</p>
//                 <p className="text-sm text-gray-600 font-mono">{item.color}</p>
//               </Card>
//             ))}
//           </div>
//         </Container>
//       </section>

//       <Divider />

//       {/* Usage Examples */}
//       <section className="py-16 px-6 bg-gray-50">
//         <Container>
//           <SectionHeader
//             title="Common Usage Examples"
//             badge="💡 EXAMPLES"
//             centered={true}
//           />
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//             {/* Hero Section */}
//             <Card>
//               <h3 className="font-bold text-lg mb-4">Hero Section</h3>
//               <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto text-[#1A1A1A]">
// {`<section className="min-h-screen bg-gradient-to-br
//   from-[#17191F] to-[#2A2E36]">
//   <h1 className="text-5xl text-white">
//     Headline
//   </h1>
//   <Button>CTA</Button>
// </section>`}
//               </pre>
//             </Card>

//             {/* Card Grid */}
//             <Card>
//               <h3 className="font-bold text-lg mb-4">Card Grid</h3>
//               <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto text-[#1A1A1A]">
// {`<div className="grid grid-cols-1 md:grid-cols-2
//   lg:grid-cols-4 gap-6">
//   {items.map((item) => (
//     <Card key={item.id}>
//       {item.content}
//     </Card>
//   ))}
// </div>`}
//               </pre>
//             </Card>

//             {/* Form */}
//             <Card>
//               <h3 className="font-bold text-lg mb-4">Contact Form</h3>
//               <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto text-[#1A1A1A]">
// {`<form className="space-y-4">
//   <Input type="email" 
//     placeholder="Email" />
//   <Input type="text" 
//     placeholder="Name" />
//   <Button type="submit">
//     Submit
//   </Button>
// </form>`}
//               </pre>
//             </Card>

//             {/* Section */}
//             <Card>
//               <h3 className="font-bold text-lg mb-4">Section Layout</h3>
//               <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto text-[#1A1A1A]">
// {`<section className="py-20 px-6 bg-white">
//   <Container>
//     <SectionHeader 
//       title="Title" />
//     {/* Content */}
//   </Container>
// </section>`}
//               </pre>
//             </Card>
//           </div>
//         </Container>
//       </section>

//       {/* Footer */}
//       <section className="bg-[#17191F] text-white py-16 px-6">
//         <Container>
//           <div className="text-center">
//             <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
//             <p className="text-lg opacity-80 mb-8">
//               Start using these components in your WanderStay project
//             </p>
//             <Button variant="secondary" className="bg-white text-[#FF6A3D]">
//               Get Started
//             </Button>
//           </div>
//         </Container>
//       </section>
//     </div>
//   )
// }

// // Helper component for search icon
// function SearchIcon() {
//   return (
//     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//       />
//     </svg>
//   )
// }
