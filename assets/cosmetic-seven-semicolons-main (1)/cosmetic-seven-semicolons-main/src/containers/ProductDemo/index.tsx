import React from "react"
type Props = {}
const ProductDemo = (props: Props) => {
    return (

        <div>
            <div className="product-reviews-form-wrap">
                <h4 className="product-form-title">Leave a replay</h4>
                <div className="product-reviews-form">
                    <form action="#">
                        <div className="form-input-item">
                            <textarea className="form-control" placeholder="Enter you feedback" defaultValue={""} />
                        </div>
                        <div className="form-input-item">
                            <input className="form-control" type="text" placeholder="Full Name" />
                        </div>
                        <div className="form-input-item">
                            <input className="form-control" type="email" placeholder="Email Address" />
                        </div>
                        <div className="form-input-item">
                            <div className="form-ratings-item">
                                <select id="product-review-form-rating-select" className="select-ratings">
                                    <option value={1}>01</option>
                                    <option value={2}>02</option>
                                    <option value={3}>03</option>
                                    <option value={4}>04</option>
                                    <option value={5}>05</option>
                                </select>
                                <span className="title">Provide Your Ratings</span>
                                <div className="product-ratingsform-form-wrap">
                                    <div className="product-ratingsform-form-icon">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div id="product-review-form-rating" className="product-ratingsform-form-icon-fill">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="reviews-form-checkbox">
                                <input className="form-check-input" type="checkbox" defaultValue id="ReviewsFormCheckbox" defaultChecked />
                                <label className="form-check-label" htmlFor="ReviewsFormCheckbox">Provide ratings
                                    anonymously.</label>
                            </div>
                        </div>
                        <div className="form-input-item mb-0">
                            <button type="submit" className="btn">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className=" flex flex-1 flex-wrap">
                <div className=" flex-col flex gap-12 pb-4 justify-center min-w-[320px] max-w-[660px] ">
                    <div className="flex justify-center mb-7">
                        <h2 className="text-5xl">review</h2>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-xl  min-w-[320px]">
                        <div className=" ">
                            <div className="flex flex-row justify-start gap-8 p-3 ">
                                <div>
                                    <img src="comment1.webp" alt className="min-w-12" />
                                </div>
                                <div className="flex gap-5 pt-2 flex-wrap">
                                    <span className="font-bold">dome jon</span>
                                    <span>developer</span>
                                    <div className="flex w-20 ml-24">
                                        <svg className="w-7 h-7 text-[#ff6565] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 border-[#ff6565] text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis reiciendis veritatis
                                incidunt inventore debitis ab nam nostrum vero id itaque provident, odio nesciunt maxime
                                praesentium, expedita neque ullam ipsam?</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-xl  min-w-[320px]">
                        <div>
                            <div className="flex flex-row justify-start gap-8 p-3 ">
                                <div>
                                    <img src="comment2.webp" alt className="min-w-12" />
                                </div>
                                <div className="flex gap-5 flex-wrap pt-2">
                                    <span className="font-bold">dome jon</span>
                                    <span>developer</span>
                                    <div className="flex w-20 ml-24">
                                        <svg className="w-7 h-7 text-[#ff6565] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 border-[#ff6565] text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis reiciendis veritatis
                                incidunt inventore debitis ab nam nostrum vero id itaque provident, odio nesciunt maxime
                                praesentium, expedita neque ullam ipsam?</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-xl  min-w-[320px]">
                        <div>
                            <div className="flex flex-row justify-start gap-8 p-3 ">
                                <div>
                                    <img src="comment3.webp" alt className="min-w-12" />
                                </div>
                                <div className="flex gap-5 pt-2 flex-wrap">
                                    <span className="font-bold">dome jon</span>
                                    <span>developer</span>
                                    <div className="flex w-20 ml-24">
                                        <svg className="w-7 h-7 text-[#ff6565] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg className="w-7 h-7 border-[#ff6565] text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis reiciendis veritatis
                                incidunt inventore debitis ab nam nostrum vero id itaque provident, odio nesciunt maxime
                                praesentium, expedita neque ullam ipsam?</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-[98vh] flex-1 items-center justify-center max-[428px]:px-5 max-[1440px]:px-5 flex-col w-full md:w-1/2 gap-4 md:gap-16 relative ">
                    <form className="p-2 items-center justify-center w-full sm:w-4/5 lg:w-4/5 2xl:w-2/3">
                        <h1 className="text-xl pl-4 underline pb-10 text-gray-800 font font-sans">Leave a Replay</h1>
                        <div className="mb-7 flex flex-col items-center justify-center w-full">
                            <textarea id="username" name="username" placeholder="Enter you feedback" className="w-full pb-4 border-b-2 rounded border-gray-300 py-2 px-4 focus:border-green-500 focus:outline-none" defaultValue={""} />
                        </div>
                        <div className="mb-7 flex flex-col items-center justify-center w-full">
                            <input type="text" id="username" name="username" placeholder="Full Name" className="w-full pb-4 border-b-2 rounded border-gray-300 py-2 px-4 focus:border-green-500 focus:outline-none" />
                        </div>
                        <div className="mb-8 flex flex-col items-center justify-center w-full">
                            <input type="email" placeholder="Email Address" className="w-full border-b-2 rounded border-gray-300 py-2 px-4 focus:border-green-500 focus:outline-none" />
                        </div>
                        <div className="rating flex gap-8 items-center">
                            {/* <select
              class="border-2 rounded-full active:border-[#ff6565] focus:border-[#ff6565] border-red-500 p-1 w-14">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
          </select> */}
                            <span className=" pl-3">Provide Your Ratings</span>
                            <div className=" flex space-x-1 overflow-hidden">
                                {/* <div class="flex items-center space-x-2">
                      <div class="flex space-x-1">
                          <input type="radio" id="star1" name="rating" value="5" class="hidden" />
                          <label for="star5" class="text-2xl cursor-pointer">&#9733;</label>
                      </div>
                      <div class="flex space-x-1">
                          <input type="radio" id="star2" name="rating" value="4" class="hidden" />
                          <label for="star4" class="text-2xl cursor-pointer">&#9733;</label>
                      </div>
                      <div class="flex space-x-1">
                          <input type="radio" id="star3" name="rating" value="3" class="hidden" />
                          <label for="star3" class="text-2xl cursor-pointer">&#9733;</label>
                      </div>
                      <div class="flex space-x-1">
                          <input type="radio" id="star4" name="rating" value="2" class="hidden" />
                          <label for="star2" class="text-2xl cursor-pointer">&#9733;</label>
                      </div>
                      <div class="flex space-x-1">
                          <input type="radio" id="star5" name="rating" value="1" class="hidden" />
                          <label for="star1" class="text-2xl cursor-pointer">&#9733;</label>
                      </div>
                  </div> */}
                                {/* <p id="rating" class="mt-4">Rate me!</p> */}
                                <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-7 h-7 text-[#ff6565]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="w-7 h-7 border-[#ff6565] text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        </div>
                        {/* <div class="mb-4  w-full flex flex-col items-center justify-center  content-center">
          <p>Your personal data will be used to support your experience throughout this website, to manage
              access to your account, and for other purposes described in our privacy policy.</p>

      </div> */}
                        <div className="reviews-form-checkbox pt-5">
                            <input className="text-red-300" type="radio" />
                            <label className="form-check-label" htmlFor="ReviewsFormCheckbox">Provide ratings
                                anonymously.</label>
                        </div>
                        <div className="pt-10 w-full flex flex-col items-start justify-center">
                            <button type="submit" className=" hover:bg-[#364958] tracking-widest rounded-full uppercase text-white py-3 px-14 focus:outline-none bg-[#ff6565]">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default ProductDemo