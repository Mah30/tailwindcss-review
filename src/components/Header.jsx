
const Header = () => {
    return ( 
        <div className="flex h-20 bg-gray-400 justify-between items-center px-5 sm:rounded-xl sm:m-5">
            <span className="text-gray-100"> Hello, User!</span>
            <h1 className="text-gray-100 "> Mariah Newsletter</h1>
            <input className="hidden sm:block" type="checkbox" />

            <div class="p-8">
                
  <div class="hidden sm:block bg-green-300 p-4 rounded">
    ✅ Só aparece em telas maiores que 640px (tablet ou desktop)
  </div>

  <div class="block sm:hidden bg-red-300 p-4 rounded mt-4">
    📱 Só aparece em telas menores que 640px (mobile)
  </div>
</div>

          
        </div>

     );
}
 
export default Header;

//rounded-xl  -	Aplica borda arredondada extra grande (border-radius)
// hidden  -	Esconde o elemento (display: none) em todos os tamanhos de tela menores que 640px(sm) - mobile
// sm:block	- A partir de telas ≥ 640px (breakpoint sm), exibe como display: block
//Ou seja: 