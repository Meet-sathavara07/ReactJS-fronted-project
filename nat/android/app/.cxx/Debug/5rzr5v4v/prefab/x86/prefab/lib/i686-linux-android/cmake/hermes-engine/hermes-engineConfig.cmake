if(NOT TARGET hermes-engine::hermesvm)
add_library(hermes-engine::hermesvm SHARED IMPORTED)
set_target_properties(hermes-engine::hermesvm PROPERTIES
    IMPORTED_LOCATION "C:/Users/cheta/.gradle/caches/9.0.0/transforms/adeaa46c7951e585fdea25628bb27c2f/transformed/hermes-android-0.82.1-debug/prefab/modules/hermesvm/libs/android.x86/libhermesvm.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/cheta/.gradle/caches/9.0.0/transforms/adeaa46c7951e585fdea25628bb27c2f/transformed/hermes-android-0.82.1-debug/prefab/modules/hermesvm/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

