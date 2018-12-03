'use strict'

###
# Inserting a fun pomodoro timer to https://f213.in/why-pomodoro/
# We need JS here, because i cant figure out
# if hexo post displays in the archive or in the single page.
#
# Timer is fixed till the first heading of the post.
#
# At first, this fun was made in 7239001b718efd243d54bd48d9cd1f2f32197266
#
###

do ->
  if $('body').hasClass('no-mobile') and window.location.href.match(/why-pomodoro/)
    $('.content').append '<div id="why-pomodoro-app-shot"></div>'
    el = $('#why-pomodoro-app-shot')
    initial_Y = el.css('top')
    stop_Y = 300
    $(window).scroll ->
      position = $(this).scrollTop()
      if position > stop_Y
        offset = el.offset()
        el.css('position', 'absolute').css 'top', offset.top
      else
        el.css('top', initial_Y).css 'position', 'fixed'
      return
  return
