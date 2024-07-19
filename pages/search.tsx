import Search from '@/components/Search';
import { ThemeProvider } from 'next-themes';
import '../globals.css';
import { FloatingNav } from '@/components/ui/FloatingNav';
import {FaHome} from 'react-icons/fa'
import Header from '@/components/Header';
const SearchPage = ({ searchParams }: { searchParams?: { query?: string } }) => {
	const query = searchParams?.query || '';
	console.log("query", query)
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
		  <div className="w-full bg-black-100 relative flex min-h-screen flex-col sm:px-10 px-5 py-8 pt-10 overflow-clip">
			  <div>
				  <Header />
			</div>
        <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
        <Search />
      </div>
    </ThemeProvider>
  );
};

export default SearchPage;