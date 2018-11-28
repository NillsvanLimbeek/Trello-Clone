// Generate Seed Data in www.json-generator.com
// [
//     '{{repeat(5)}}',
//     {
//       Title: '{{lorem(1, "words")}}',
//       Favorite: '{{bool()}}',
//       Personal: '{{bool()}}',
//       Color: '{{integer(1, 10)}}',
//       CreatedAt: '{{date(new Date(2018, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
//       Columns: [
//         '{{repeat(1, 5)}}',
//         {
//           Title: '{{lorem(1, "words")}}',
//           State: '{{integer(1, 3)}}',
//           Items: [
//             '{{repeat(1, 5)}}',
//             {
//              Title: '{{lorem(1, "words")}}',
              
//             }
//           ]
//         }
//       ]
//     }
//   ]