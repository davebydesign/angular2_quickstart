import { provideRouter, Routes, RouterModule }  from '@angular/router';

   /* -- MODIFY HERE -- */
import { HomePageComponent    }  from './components/routepages/home/home.component';
import { CodingPageComponent  }  from './components/routepages/coding/coding.component';
import { MusicPageComponent   }  from './components/routepages/music/music.component';
import { ArtPageComponent     }  from './components/routepages/art/art.component';
import { WritingPageComponent }  from './components/routepages/writing/writing.component';
import { BlogPageComponent    }  from './components/routepages/blog/blog.component';
import { PezPageComponent     }  from './components/routepages/pez/pez.component';
import { SearchPageComponent  }  from './components/routepages/search/search.component';


const appRoutes: Routes = [      /* -- MODIFY HERE -- */
  { path: '',         component: HomePageComponent    },
  { path: 'coding',   component: CodingPageComponent  },
  { path: 'music',    component: MusicPageComponent   },
  { path: 'art',      component: ArtPageComponent     },
  { path: 'writing',  component: WritingPageComponent },
  { path: 'blog',     component: BlogPageComponent    },
  { path: 'pez',      component: PezPageComponent     },
  { path: 'search/:SearchText',   component: SearchPageComponent  },
  { path: '**',       component: HomePageComponent    }
];

export const appRoutingProviders: any[] = [
  provideRouter(appRoutes)
];

export const routing = RouterModule.forRoot(appRoutes);
