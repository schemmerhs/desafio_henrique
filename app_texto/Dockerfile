# Dockerfile App Python


FROM python:3.9-slim


RUN echo "America/Sao_Paulo" > /etc/timezone


WORKDIR /app


COPY app_texto/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt
RUN pip install redis flask-caching



COPY app_texto/app_texto.py .


EXPOSE 5000


CMD ["python", "app_texto.py"]
