import { A } from "./(post)/components/a";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
      <div className="grow text-left w-1/2">
        <div className="flex flex-col">
          <A target="_blank" href="https://twitter.com/javiergradiche" className="no-underline">
            Twitter: @javiergradiche
          </A>
          <A target="_blank" href="mailto:javiergradiche@gmail.com" className="no-underline">
            Mail: javiergradiche@gmail.com
          </A>
          </div>
      </div>
      <div className="flex flex-col text-right w-1/2">
        <div>
          Este sitio web es propiedad de y es administrado por Javier Gradiche
        </div>
        <div>
        This website is owned by and managed by Javier Gradiche
        </div>
      </div>
    </footer>
  );
}
