try {
    function tampilkanSidebar() {
        const sidebar = `
          <div class="w-[181px] hidden lg:block h-svh fixed overflow-hidden bg-white">
            <div class="flex flex-col justify-between items-center w-[140px] h-screen absolute left-5 pt-5">
              <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
                <div class="flex icon-apl w-16 h-14 flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative"></div>
                <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                  <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                    <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-[5px] rounded-[5px] bg-[#fe005c]">
                      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-white">Beranda</p>
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-grow-0 flex-shrink-0 w-[17px] h-4 relative" preserveAspectRatio="none">
                        <g clip-path="url(#clip0_95_550)">
                          <rect width="17" height="16" fill="#FE005C"></rect>
                          <path d="M1 6.25L8.5 1L16 6.25V14.5C16 14.8978 15.8244 15.2794 15.5118 15.5607C15.1993 15.842 14.7754 16 14.3333 16H2.66667C2.22464 16 1.80072 15.842 1.48816 15.5607C1.17559 15.2794 1 14.8978 1 14.5V6.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M6 15V9H11V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_95_550">
                            <rect width="17" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-[5px]">
                      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#1d1b20]">Kebijakan</p>
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-grow-0 flex-shrink-0" preserveAspectRatio="none">
                        <path d="M10.2355 4.39673C10.0909 4.54426 10.0099 4.74262 10.0099 4.94921C10.0099 5.15581 10.0909 5.35416 10.2355 5.5017L11.4983 6.76453C11.6458 6.90914 11.8442 6.99015 12.0508 6.99015C12.2574 6.99015 12.4557 6.90914 12.6033 6.76453L15.5788 3.78899C15.9757 4.66601 16.0959 5.64316 15.9233 6.59021C15.7507 7.53727 15.2937 8.40924 14.613 9.08993C13.9323 9.77062 13.0603 10.2277 12.1133 10.4003C11.1662 10.5728 10.1891 10.4526 9.31203 10.0558L3.85819 15.5096C3.5442 15.8236 3.11834 16 2.67429 16C2.23024 16 1.80438 15.8236 1.49039 15.5096C1.1764 15.1956 1 14.7698 1 14.3257C1 13.8817 1.1764 13.4558 1.49039 13.1418L6.94423 7.68797C6.54735 6.81095 6.42719 5.8338 6.59974 4.88675C6.7723 3.93969 7.22938 3.06772 7.91007 2.38703C8.59076 1.70634 9.46273 1.24926 10.4098 1.0767C11.3568 0.904149 12.334 1.02431 13.211 1.42119L10.2434 4.38883L10.2355 4.39673Z" stroke="#1D1B20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#c9c9c9]">
                <span class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#c9c9c9]">v2024.9.19</span><br />
                <span class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#c9c9c9]">© FoRes 2024</span>
              </p>
            </div>
          </div>
        `;
      
        const sidebarContainer = document.getElementById("sidebar-notlogin");
        if (sidebarContainer) {
          sidebarContainer.innerHTML = sidebar;
        }
      }
} catch (error) {
    console.log(error)
}

try {
  function tampilkanSidebarLogin() {
      const sidebarL = `
        <div class="w-[181px] hidden lg:block h-svh fixed overflow-hidden bg-white">
          <div class="flex flex-col justify-between items-center w-[140px] h-screen absolute left-5 pt-5">
            <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
              <div class="flex icon-apl w-16 h-14 flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative"></div>
              <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                  <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-[5px] rounded-[5px] bg-[#fe005c]">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-white">Beranda</p>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-grow-0 flex-shrink-0 w-[17px] h-4 relative" preserveAspectRatio="none">
                      <g clip-path="url(#clip0_95_550)">
                        <rect width="17" height="16" fill="#FE005C"></rect>
                        <path d="M1 6.25L8.5 1L16 6.25V14.5C16 14.8978 15.8244 15.2794 15.5118 15.5607C15.1993 15.842 14.7754 16 14.3333 16H2.66667C2.22464 16 1.80072 15.842 1.48816 15.5607C1.17559 15.2794 1 14.8978 1 14.5V6.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 15V9H11V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_95_550">
                          <rect width="17" height="16" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-[5px]">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#1d1b20]">Resep Disimpan</p>
                    <span class="simpan h-4 w-4"></span>
                  </div>
                  <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-[5px]">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#1d1b20]">Resep Favorit</p>
                    <span class="favorit-icon h-4 w-4"></span>
                  </div>
                  <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-[5px]">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#1d1b20]">Kebijakan</p>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-grow-0 flex-shrink-0" preserveAspectRatio="none">
                      <path d="M10.2355 4.39673C10.0909 4.54426 10.0099 4.74262 10.0099 4.94921C10.0099 5.15581 10.0909 5.35416 10.2355 5.5017L11.4983 6.76453C11.6458 6.90914 11.8442 6.99015 12.0508 6.99015C12.2574 6.99015 12.4557 6.90914 12.6033 6.76453L15.5788 3.78899C15.9757 4.66601 16.0959 5.64316 15.9233 6.59021C15.7507 7.53727 15.2937 8.40924 14.613 9.08993C13.9323 9.77062 13.0603 10.2277 12.1133 10.4003C11.1662 10.5728 10.1891 10.4526 9.31203 10.0558L3.85819 15.5096C3.5442 15.8236 3.11834 16 2.67429 16C2.23024 16 1.80438 15.8236 1.49039 15.5096C1.1764 15.1956 1 14.7698 1 14.3257C1 13.8817 1.1764 13.4558 1.49039 13.1418L6.94423 7.68797C6.54735 6.81095 6.42719 5.8338 6.59974 4.88675C6.7723 3.93969 7.22938 3.06772 7.91007 2.38703C8.59076 1.70634 9.46273 1.24926 10.4098 1.0767C11.3568 0.904149 12.334 1.02431 13.211 1.42119L10.2434 4.38883L10.2355 4.39673Z" stroke="#1D1B20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="border-b border-gray-300 w-full"></div>
                  <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-[5px]">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#fe005c]">Logout</p>
                    <span class="logout-icon h-4 w-4"></span>
                  </div>
                </div>
              </div>
            </div>
            <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#c9c9c9]">
              <span class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#c9c9c9]">v2024.9.19</span><br />
              <span class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#c9c9c9]">© FoRes 2024</span>
            </p>
          </div>
        </div>
      `;
    
      const sidebarLContainer = document.getElementById("sidebar-login");
      if (sidebarLContainer) {
        sidebarLContainer.innerHTML = sidebarL;
      }
    }
} catch (error) {
  console.log(error)
}
  
try {
    function tampilkanNavbarLogin() {
        const navbarL = `
          <div
          class="flex flex-col mx-auto justify-center items-center w-full left-0 top-0 gap-1.5"
        >
            <div class="container mx-auto flex justify-between self-stretch flex-grow-0 flex-shrink-0">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                <div
                  class="burger-icon w-[23px] xl:hidden h-14 flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1"
                >
                </div>
                <div
                  class="icon-apl w-16 h-14 flex xl:hidden flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative"
                >
                </div>
              </div>
              <div class="relative w-96 hidden md:block">
                <input 
                    type="text" 
                    placeholder="Cari resep..." 
                    class="w-full py-2 pl-10 pr-4 border-b border-gray-300 focus:outline-none"
                />
                <div
                  class="cari-icon w-[23px] h-14 absolute left-2 top-[1.2rem] transform -translate-y-1/2 text-gray-500"
                ></div>
              </div>
              <div class="flex gap-2">
                <div
                class="cari-icon md:hidden block w-[23px]  h-14 "
              ></div>
                <a href="/login.html"><div
                class="tambah-icon w-[23px]  h-14 "
              ></div></a>
                <a href="/login.html"><div
                class="notif-icon w-[23px]  h-14 "
              ></div></a>
              <a href="/login.html" class="flex justify-center items-center">
                <div alt="Profile" class="profile w-8  h-8 rounded-full mr-3 object-cover"></div>
              </a>
              </div>
            </div>
            <div class="flex justify-center items-center w-full">
              <div class="flex items-center p-2 w-full justify-center">
                <span alt="Profile" class="profile w-10 h-10 rounded-full mr-3 object-cover"></span>
                <a href="" class="flex items-center max-w-96 w-full border border-[#1d1b20] rounded-lg p-2">
                  Mau sharing resep?
                </a>
              </div>
            </div>
            <div
              class="flex container mx-auto justify-center self-stretch flex-grow-0 flex-shrink-0 gap-2"
            >
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#fe005c]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-white">Semua</p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#e1e1e1]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1d1b20]">Sarapan</p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#e1e1e1]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1d1b20]">Utama</p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#e1e1e1]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1d1b20]">Desert</p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#e1e1e1]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1d1b20]">Snack</p>
              </div>
            </div>
        `;
      
        const navLContainer = document.getElementById("navbar-login");
        if (navLContainer) {
          navLContainer.innerHTML = navbarL;
        }
      }
      
     
} catch (error) {
    console.log(error)
}

try {
    function tampilkanNavbar() {
        const navbar = `
          <div
          class="flex flex-col mx-auto justify-center items-center w-full left-0 top-0 gap-1.5"
        >
            <div class="container mx-auto flex justify-between self-stretch flex-grow-0 flex-shrink-0">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                <div
                  class="burger-icon w-[23px] xl:hidden h-14 flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1"
                >
                </div>
                <div
                  class="icon-apl w-16 h-14 flex xl:hidden flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative"
                >
                </div>
              </div>
              <div class="relative w-96 hidden md:block">
                <input 
                    type="text" 
                    placeholder="Cari resep..." 
                    class="w-full py-2 pl-10 pr-4 border-b border-gray-300 focus:outline-none"
                />
                <div
                  class="cari-icon w-[23px] h-14 absolute left-2 top-[1.2rem] transform -translate-y-1/2 text-gray-500"
                ></div>
              </div>
              <div class="flex gap-2">
                <div
                class="cari-icon md:hidden block w-[23px]  h-14 "
              ></div>
                <a href="/login.html"><div
                class="login-icon w-[23px]  h-14 "
              ></div></a>
              </div>
            </div>
            <div
              class="flex container mx-auto justify-center self-stretch flex-grow-0 flex-shrink-0 gap-2"
            >
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#fe005c]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-white">Semua</p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#e1e1e1]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1d1b20]">Sarapan</p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#e1e1e1]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1d1b20]">Utama</p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#e1e1e1]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1d1b20]">Desert</p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-[5px] rounded-md bg-[#e1e1e1]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1d1b20]">Snack</p>
              </div>
            </div>
        `;
      
        const navContainer = document.getElementById("navbar-notlogin");
        if (navContainer) {
          navContainer.innerHTML = navbar;
        }
      }
      
     
} catch (error) {
    console.log(error)
}

window.onload = () =>{
  tampilkanSidebar();
  tampilkanNavbarLogin();
  tampilkanNavbar();
  tampilkanSidebarLogin();
}