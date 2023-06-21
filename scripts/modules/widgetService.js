import { renderWidgetForecast, renderWidgetOther, renderWidgetToday, showError } from "./render.js";
import { fetchWeather } from "./APIService.js";

export const startWidget = async () => {
  const widget = document.createElement('div');
  widget.className = 'widget';

  const dataWeather = await fetchWeather('Санкт-Петербург');
  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    showError();
  }

  renderWidgetForecast(widget);


  return widget;
};