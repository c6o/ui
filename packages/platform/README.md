# Traxitt #

## Development Setup ##

The prerequisites are:

* kubectl
* helm
* minikube (if running a local cluster)

### Setup minikube ###

``` bash
minikube profile traxitt

minikube start \
    --profile=traxitt \
    --memory=8192 --cpus=4 --kubernetes-version=v1.13.0 \
    --insecure-registry="solarwind:5000" \
    --vm-driver=hyperkit
```

### OR Setup kubernetes cluster using config file ###

``` bash
export KUBECONFIG $PWD/....kubeconfig.yaml
```

### Setup istio ###

#### Download istio & install istio tools ####

The following assumes `istio-1.0.6`. Change this to whichever is appropriate

``` bash
curl -L https://git.io/getLatestIstio | sh -
mv istio-1.0.6 /usr/local/bin/
export PATH="$PATH:/usr/local/bin/istio-1.0.6/bin"
```

#### Install istio into kubernetes ####

``` bash
# Ignore for now
# kubectl apply -f $(dirname $(which istioctl))/../install/kubernetes/helm/istio/charts/certmanager/templates/crds.yaml

# Generate the istio configuration
helm template $(dirname $(which istioctl))/../install/kubernetes/helm/istio \
  --name istio \
  --namespace istio-system \
  --set grafana.enabled=true > istio.yaml

# Setup the istio-system namespace
kubectl create namespace istio-system

# Install istio
kubectl apply -f istio.yaml

# Cleanup
rm istio.yaml

# See if pods are running:
kubectl get pods -n istio-system
```

#### Install minimal istio into kubernetes ####

``` bash
helm template $(dirname $(which istioctl))/../install/kubernetes/helm/istio --name istio --namespace istio-system \
  --set security.enabled=false \
  --set ingress.enabled=false \
  --set gateways.istio-ingressgateway.enabled=false \
  --set gateways.istio-egressgateway.enabled=false \
  --set galley.enabled=false \
  --set sidecarInjectorWebhook.enabled=false \
  --set mixer.enabled=false \
  --set prometheus.enabled=false \
  --set global.proxy.envoyStatsd.enabled=false \
  --set pilot.sidecar=false > istio-minimal.yaml

kubectl create namespace istio-system
kubectl apply -f istio-minimal.yaml
rm istio-minimal.yaml
```

## Usage ##

### Open a port to a service ###

``` bash
# define #APP_NAME
kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=$APP_NAME -o jsonpath='{.items[0].metadata.name}') LOCAL_PORT:CONTAINER_PORT &

# OR SIMPLY

kubectl -n istio-system port-forward deployment/APP_NAME LOCAL_PORT:CONTAINER_PORT &
```

### Enable istio for a given namespace ###

``` bash
kubectl label namespace NAMESPACE istio-injection=enabled
```