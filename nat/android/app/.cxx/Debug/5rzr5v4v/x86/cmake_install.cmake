# Install script for directory: D:/nat/node_modules/react-native/ReactAndroid/cmake-utils/default-app-setup

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "C:/Program Files (x86)/appmodules")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Debug")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "0")
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "TRUE")
endif()

# Set default install directory permissions.
if(NOT DEFINED CMAKE_OBJDUMP)
  set(CMAKE_OBJDUMP "D:/android sdk's/ndk/27.1.12297006/toolchains/llvm/prebuilt/windows-x86_64/bin/llvm-objdump.exe")
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/rnasyncstorage_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/rncameraroll_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNCGeolocationSpec_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/rndocumentpickerCGen_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNGoogleSignInCGen_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNSentrySpec_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNBootSplashSpec_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNDatePickerSpecs_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/rngesturehandler_codegen_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNHapticFeedbackSpec_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNImagePickerSpec_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNMapsSpecs_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/reactnativemmkv_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/pagerview_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/rnpdf_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNPermissionsSpec_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/rnreanimated_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/safeareacontext_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/rnscreens_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNShareSpec_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/rnsvg_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNVectorIconsSpec_autolinked_build/cmake_install.cmake")
  include("D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/RNCWebViewSpec_autolinked_build/cmake_install.cmake")

endif()

if(CMAKE_INSTALL_COMPONENT)
  set(CMAKE_INSTALL_MANIFEST "install_manifest_${CMAKE_INSTALL_COMPONENT}.txt")
else()
  set(CMAKE_INSTALL_MANIFEST "install_manifest.txt")
endif()

string(REPLACE ";" "\n" CMAKE_INSTALL_MANIFEST_CONTENT
       "${CMAKE_INSTALL_MANIFEST_FILES}")
file(WRITE "D:/nat/android/app/.cxx/Debug/5rzr5v4v/x86/${CMAKE_INSTALL_MANIFEST}"
     "${CMAKE_INSTALL_MANIFEST_CONTENT}")
