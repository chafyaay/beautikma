import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from '../product';

@Injectable()
export class ProductsService {
  DATA: Observable<Product[]> = of([
    {
      id: 0,
      category: 'cos',
      brand: '21st Century',
      pname: 'Magnesium, 250 mg, 110 Tablets',
      description: `
      <ul><li>Expiration Date:? March 1 2024</li>
<li>Date First Available: May 10 2012</li>
<li>Shipping Weight:? 0.32 lbsSwitch to Metric units</li>
<li>Product Code: CEN-22713</li>
<li>UPC Code: 740985227138</li>
<li>Package Quantity: 110 Count</li>
<li>Dimensions: 2.5 x 3.8 x 1.8 in, 0.27 lbsSwitch to Metric units</li></ul>`,
      price: 105,
      stock: 0,
      images: [
        'https://s3.images-iherb.com/cen/cen22713/l/29.jpg',
        'https://s3.images-iherb.com/cen/cen22713/l/35.jpg'
      ],
      discount: 20,
      reviews: 
        [
          {
          name:'Hasnaa Benmasoud',
          title:'magnefique!!',
          reviewRate:4,
          avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
          comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
          commentDate:new Date()
        },
          {
          name:'Hasnaa Benmasoud',
          title:'magnefique!!',
          reviewRate:5,
          avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
          comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
          commentDate:new Date()
        },
          {
          name:'Rachid Fdali',
          title:'magnefique!!',
          reviewRate:2,
          avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
          comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
          commentDate:new Date()
        },
          {
          name:'Mohammed Saidi',
          title:'magnefique!!',
          reviewRate:3,
          avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
          comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
          commentDate:new Date()
        }
        ]
      
    },
    {
      id: 1,
      category: 'cos',
      brand: 'Sports Research',
      pname: 'Collagen Peptides, Unflavored, 16 oz (454 g)',
      description: `
      <ul><li>Expiration Date:? March 1 2024</li>
<li>Date First Available: May 10 2012</li>
<li>Shipping Weight:? 0.32 lbsSwitch to Metric units</li>
<li>Product Code: CEN-22713</li>
<li>UPC Code: 740985227138</li>
<li>Package Quantity: 110 Count</li>
<li>Dimensions: 2.5 x 3.8 x 1.8 in, 0.27 lbsSwitch to Metric units</li></ul>`,
      price: 105,
      stock: 6,
      images: [
        'https://s3.images-iherb.com/sre/sre01018/l/32.jpg',
        'https://s3.images-iherb.com/sre/sre01018/l/37.jpg'
      ],
      discount: 10,
      reviews:  [
        {
        name:'Hasnaa Benmasoud',
        title:'magnefique!!',
        reviewRate:4,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      },
        {
        name:'Hasnaa Benmasoud',
        title:'magnefique!!',
        reviewRate:2,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      },
        {
        name:'Rachid Fdali',
        title:'Genial!!',
        reviewRate:4,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      },
        {
        name:'Mohammed Saidi',
        title:'superb!!',
        reviewRate:1,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      }
      ]
    },
    {
      id: 2,
      category: 'cos',
      brand: 'Sports Research',
      pname:
        'SUPERBA 2 Antarctic Krill Oil with Astaxanthin, 500 mg, 120 Softgels',
      description: `
      <ul><li>Expiration Date:? March 1 2024</li>
      <li>Date First Available: May 10 2012</li>
      <li>Shipping Weight:? 0.32 lbsSwitch to Metric units</li>
      <li>Product Code: CEN-22713</li>
      <li>UPC Code: 740985227138</li>
      <li>Package Quantity: 110 Count</li>
      <li>Dimensions: 2.5 x 3.8 x 1.8 in, 0.27 lbsSwitch to Metric units</li></ul>`,
      price: 200,
      stock: 16,
      images: [
        'https://s3.images-iherb.com/sre/sre01136/l/24.jpg',
        'https://s3.images-iherb.com/sre/sre01136/l/29.jpg'
      ],
      discount: 90,
      reviews:  [
        {
        name:'Hasnaa Benmasoud',
        title:'magnefique!!',
        reviewRate:4,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      },
        {
        name:'Hasnaa Benmasoud',
        title:'magnefique!!',
        reviewRate:5,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      },
        {
        name:'Rachid Fdali',
        title:'magnefique!!',
        reviewRate:2,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      },
        {
        name:'Mohammed Saidi',
        title:'magnefique!!',
        reviewRate:3,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      }
      ]
    },
    {
      id: 3,
      category: 'cos',
      brand: 'Mild By Nature',
      pname: 'Witch Hazel, Rose Petal, Alcohol-Free, 12 fl oz (355 ml)',
      description: `
      <ul><li>Expiration Date:? March 1 2024</li>
<li>Date First Available: May 10 2012</li>
<li>Shipping Weight:? 0.32 lbsSwitch to Metric units</li>
<li>Product Code: CEN-22713</li>
<li>UPC Code: 740985227138</li>
<li>Package Quantity: 110 Count</li>
<li>Dimensions: 2.5 x 3.8 x 1.8 in, 0.27 lbsSwitch to Metric units</li></ul>`,
      price: 35,
      stock: 206,
      images: [
        'https://s3.images-iherb.com/mbn/mbn01358/l/14.jpg',
        'https://s3.images-iherb.com/mbn/mbn01358/l/15.jpg'
      ],
      discount: 20,
      reviews:  [
        {
        name:'Hasnaa Benmasoud',
        title:'magnefique!!',
        reviewRate:4,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      },
        {
        name:'Hasnaa Benmasoud',
        title:'magnefique!!',
        reviewRate:5,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      },
        {
        name:'Rachid Fdali',
        title:'magnefique!!',
        reviewRate:2,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      },
        {
        name:'Mohammed Saidi',
        title:'magnefique!!',
        reviewRate:3,
        avatar:'https://ugc-images.images-iherb.com/ugc/20200825/4af2dd61-07b4-4884-9337-21a90532956d/s.jpg',
        comment: `J’ai une fracture au niveau du pied et je disais je l’achète pour qu’il m’aide à consolider l’os et vraiment ça m’a beaucoup aider dans deux mois mon pied est consolidé et je marche normal au lieu d’avoir un plâtre et un repos de quelques mois , surtout pour les personnes qui ont un problème de l’os il est excellent faut pas oublié la majorité des personnes souffrent d’une carence de la vitamine D , et vaut mieux le prendre au cours du repas, voilà mon expérience avec ce complément j’espère que ça vous a plu merci de laisser un (oui) pour qu’il soit visible à tout le monde `,
        commentDate:new Date()
      }
      ]
    }
  ]);
  constructor() {}
  getProductById(id: any) {
    return this.DATA.pipe(
      map(items => {
       
        return items.find(item => {
          return item.id == parseInt(id);
        });
      })
    );
  }
  getAllProducts() {
    return this.DATA.pipe(map(item => item));
  }
}
